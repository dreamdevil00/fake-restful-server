module.exports = {
  id: '微地震处理解释',
  allRegions: ['基础数据', '成果数据'],
  基础数据: [
    {
      property: 'projectManager',
      description: '项目长',
      required: false,
    },
    {
      property: 'processingOrg',
      description: '处理解释单位',
      required: false,
    },
    {
      property: 'processingCompleteDate',
      description: '处理解释写成时间',
      required: false,
    },
    {
      property: 'processingSoftware',
      description: '处理解释软件',
      required: false,
    },
    {
      property: 'comments',
      description: '备注',
      required: false,
    },
  ],
  成果数据: [
    {
      property: 'resultNumber',
      description: '序号',
      required: false,
    },
    {
      property: 'fractureStage',
      description: '压裂分段序号',
      required: false,
    },
    {
      property: 'processingDate',
      description: '日期',
      required: false,
    },
    {
      property: 'processingTime',
      description: '时间',
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
      property: 'eventMagnitude',
      description: '事件震级',
      required: false,
    },
    {
      property: 'signalNoiseRatio',
      description: '信噪比',
      required: false,
    },
  ],
};
