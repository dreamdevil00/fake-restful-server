module.exports = {
  id: '常规VSP采集',
  allRegions: ['零-非零井源距属性', '采集基础属性', '测量成果', '抽道表'],
  '零-非零井源距属性': [
    {
      property: 'lineNum',
      description: '测线号',
      require: false,
    },
    {
      property: 'surveyDotType',
      description: '观测点类型',
      require: false,
    },
    {
      property: 'surveyWellSection',
      description: '观测井段',
      require: false,
    },
    {
      property: 'surveyDotPitch',
      description: '观测点距',
      require: false,
    },
    {
      property: 'wellSourceDistanceRange',
      description: '井源距范围',
      require: false,
    },
    {
      property: 'excitationSourceOrientation',
      description: '激发点方位',
      require: false,
    },
    {
      property: 'comments',
      description: '备注',
      require: false,
    },
  ],
  采集基础属性: [
    {
      property: 'wellName',
      description: '井名',
      required: false,
    },
    {
      property: 'geoWellNorthing',
      description: '井北坐标',
      required: false,
    },
    {
      property: 'geoWellEasting',
      description: '井东坐标',
      required: false,
    },
    {
      property: 'bushingElevationWell',
      description: '井补心高程',
      required: false,
    },
    {
      property: 'surfaceElevationWell',
      description: '井地表高程',
      required: false,
    },
    {
      property: 'startWellDepthSurvey',
      description: '观测起始井深',
      required: false,
    },
    {
      property: 'endWellDepthSurvey',
      description: '观测结束井深',
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
      property: 'levelSpacing',
      description: '级间距',
      required: false,
    },
    {
      property: 'receiverClass',
      description: '接收级别',
      required: false,
    },
    {
      property: 'allShots',
      description: '总炮数',
      required: false,
    },
    {
      property: 'qualityRate',
      description: '合格品率',
      required: false,
    },
    {
      property: 'wellMainLine',
      description: '过井地震测线',
      required: false,
    },
    {
      property: 'instrumentReceiverTypeWell',
      description: '井下检波器型号',
      required: false,
    },
    {
      property: 'instrumentModel',
      description: '仪器型号',
      required: false,
    },
    {
      property: 'effectivePhysicalPoints',
      description: '有效物理点数',
      required: false,
    },
    {
      property: 'partnerName',
      description: '施工单位',
      required: false,
    },
    {
      property: 'partnerTeam',
      description: '施工队号',
      required: false,
    },
    {
      property: 'startDate',
      description: '施工起始时间',
      required: false,
    },
    {
      property: 'endDate',
      description: '施工完成时间',
      required: false,
    },
    {
      property: 'comments',
      description: '备注',
      required: false,
    },
  ],
  测量成果: [
    {
      property: 'resultNumber',
      description: '序号',
      required: false,
    },
    {
      property: 'shotNumber',
      description: '炮井号',
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
      property: 'altitudeElevation',
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
      description: '偏移',
      required: false,
    },
    {
      property: 'azimuth',
      description: '方位',
      required: false,
    },
    {
      property: 'sideLength',
      description: '边长',
      required: false,
    },
  ],
  抽道表: [
    {
      property: 'serialNumber',
      description: '序号',
      required: false,
    },
    {
      property: 'lineNum',
      description: '测线号',
      required: false,
    },
    {
      property: 'fileNumber',
      description: '文件号',
      required: false,
    },
    {
      property: 'surveyDepth',
      description: '观测深度(m)',
      required: false,
    },
    {
      property: 'shotNumber',
      description: '炮井号',
      required: false,
    },
    {
      property: 'stimulateDepth',
      description: '激发深度(m)',
      required: false,
    },
  ],
};
