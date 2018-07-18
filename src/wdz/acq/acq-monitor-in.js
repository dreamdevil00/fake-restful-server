module.exports = {
  id: '微地震采集_监控方式_井中监测',
  allRegions: ['井中监测属性'],
  井中监测属性: [
    {
      property: 'wellName',
      description: '井名',
      required: false,
    },
    {
      property: 'monitorWellNumber',
      description: '监测井个数',
      required: false,
    },
    {
      property: 'receiverTraces',
      description: '接收道数',
      required: false,
    },
    {
      property: 'levelSpacing',
      description: '级间距',
      required: false,
    },
    {
      property: 'maxMeasuringDepDetector',
      description: '检波器最大测深',
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
};
