module.exports = {
  id: '微地震采集_监控方式_地面监测',
  allRegions: ['地面监测属性', '地面监测测量成果'],
  地面监测属性: [
    {
      property: 'receiveChannelsNumber',
      description: '接收道数',
      required: false,
    },
    {
      property: 'lineNumber',
      description: '测线条数',
      required: false,
    },
    {
      property: 'acquisitionRatio',
      description: '采样率',
      required: false,
    },
    {
      property: 'processingRecordLength',
      description: '记录长度',
      required: false,
    },
    {
      property: 'instrumentReceiverType',
      description: '检波器型号',
      required: false,
    },
    {
      property: 'detectorNumber',
      description: '检波器个数',
      required: false,
    },
    {
      property: 'instrumentModel',
      description: '仪器型号',
      required: false,
    },
    {
      property: 'comments',
      description: '备注',
      required: false,
    },
  ],
  地面监测测量成果: [
    {
      property: 'resultNumber',
      description: '序号',
      required: false,
    },
    {
      property: 'lineName',
      description: '测线名',
      required: false,
    },
    {
      property: 'designPointName',
      description: '设计点名',
      required: false,
    },
    {
      property: 'geoNorthing',
      description: '北坐标',
      required: false,
    },
    {
      property: 'geoEasting',
      description: '东坐标',
      required: false,
    },
    {
      property: 'surfaceElevation',
      description: '海拔高程',
      required: false,
    },
    {
      property: 'pileOffset',
      description: '桩差',
      required: false,
    },
    {
      property: 'offset',
      description: 'offset',
      required: false,
    },
  ],
};
