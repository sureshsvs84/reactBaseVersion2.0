import TatvamPlotly from '../../../baseComponents/tatvamPlotly'


class LinePlusBarChartWith2YAxis extends TatvamPlotly {
}

LinePlusBarChartWith2YAxis.defaultProps = {
    layout: {
        showlegend: true, 
        width: 500, 
        height: 400, 
        title: 'Common Layout'
    }
    , config: {
        displayModeBar: true,
        modeBarButtonsToRemove: [
            "zoom2d",
            "pan2d",
            "select2d",
            "lasso2d",
            "zoomIn2d",
            "zoomOut2d",
            "autoScale2d",
            "resetScale2d",
            "toggleSpikelines",
            "sendDataToCloud",
        ],
        displaylogo: false
    }
}

export default TatvamCharts;
