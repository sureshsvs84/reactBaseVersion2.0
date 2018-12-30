import React, { Component } from 'react';
import { number, object, string } from 'prop-types';
import { loaderActionTypes } from 'actionTypes';

export const UPDATE_TIME = 200;
export const MAX_PROGRESS = 99;
export const PROGRESS_INCREASE = 10;
let startTime = new Date().getTime();
let endTime = new Date().getTime();

const initialState = {
    terminatingAnimationTimeout: null,
    percent: 0,
    progressInterval: null
};

class LoadingBar extends Component {
    static propTypes = {
        className: string,
        loading: number,
        maxProgress: number,
        progressIncrease: number,
        updateTime: number,
        scope: string,
        style: object,
        delay: number
    };
    
    static defaultProps = {
        className: '',
        loading: 0,
        maxProgress: MAX_PROGRESS,
        progressIncrease: PROGRESS_INCREASE,
        style: {},
        updateTime: UPDATE_TIME,
        scope: loaderActionTypes.DEFAULT,
        delay: 500
    };
    
    state = {
        ...initialState,
        hasMounted: false
    };
    
    componentDidMount() {
        this.setState({ hasMounted: true });
        if (this.props.loading > 0) {
            this.launch();
        }
    }
    
    UNSAFE_componentWillReceiveProps(nextProps) {
        startTime = new Date().getTime();
        if (this.shouldStart(this.props, nextProps)) {
            this.launch();
            return;
        }
        
        this.setState((prevState) => {
            if (this.shouldStop(prevState, nextProps)) {
                if (prevState.percent === 0) {
                    // not even shown yet because the action finished quickly after start
                    clearInterval(prevState.progressInterval);
                    return initialState;
                }
                
                // should progress to 100 percent
                return { percent: 100 };
            }
            
            return null;
        });
    }
    
    componentWillUnmount() {
        clearInterval(this.state.progressInterval);
    }
    
    shouldStart = (props, nextProps) =>
        props.loading === 0 && nextProps.loading > 0;
    
    shouldStop = (state, nextProps) =>
        state.progressInterval && nextProps.loading === 0;
    
    shouldShow() {
        return this.state.percent > 0 && this.state.percent <= 99;
    }
    
    launch() {
        this.setState((prevState, { updateTime }) => {
            let { progressInterval } = prevState;
            const loadingBarNotShown = !progressInterval;
            if (loadingBarNotShown) {
                progressInterval = setInterval(this.simulateProgress, updateTime);
            }
            return {
                progressInterval,
                percent: 0
            };
        });
    }
    
    newPercent = (percent, progressIncrease) => {
        // Use cos as a smoothing function
        // Can be any function to slow down progress near the 100%
        const smoothedProgressIncrease = (
            progressIncrease * Math.cos(percent * (Math.PI / 2 / 100))
        );
        return percent + Math.round(smoothedProgressIncrease);
    };
    
    simulateProgress = () => {
        this.setState((prevState, { maxProgress, progressIncrease }) => {
            let { progressInterval, percent } = prevState;
            const newPercent = this.newPercent(percent, progressIncrease);
            endTime = new Date().getTime();
            if (percent === 100) {
                clearInterval(progressInterval);
                progressInterval = null;
            } else if (newPercent <= maxProgress) {
                if (endTime - startTime > this.props.delay) {
                    percent = newPercent;
                }
            }
            return {
                percent,
                progressInterval
            };
        });
    };
    
    resetProgress = () => {
        this.setState(initialState);
    };
    
    buildStyle() {
        const style = {
            opacity: '1'
        };
        
        if (this.shouldShow()) {
            style.opacity = '1';
            style.display = 'block';
        } else {
            style.opacity = '0';
            style.display = 'none';
        }
        
        return { ...style, ...this.props.style };
    }
    
    render() {
        if (!this.state.hasMounted) {
            return <div/>;
        }
        
        return (
            <div className="overlay-load" style={this.buildStyle()}>
                <div className="loader" style={this.buildStyle()}><span>Loading...{this.state.percent} %</span></div>
            </div>
        
        );
    }
}

export default LoadingBar;
