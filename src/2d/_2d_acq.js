module.exports = {
  id: '二维采集',
  allRegions: ['采集测线属性', '采集测线坐标'],
  采集测线属性: [
    {
      property: 'businessUnit',
      description: '业务单位',
      required: false,
    },
    {
      property: 'constructionUnit',
      description: '施工单位',
      required: false,
    },
    {
      property: 'stage',
      description: '阶段',
      required: false,
    },
    {
      property: 'instrumentModel',
      description: '仪器型号',
      required: false,
    },
    {
      property: 'shotLineDistance',
      description: '炮线距',
      required: false,
    },
    {
      property: 'shotPointDistance',
      description: '炮点距',
      required: false,
    },
    {
      property: 'trackInterval',
      description: '道间距',
      required: false,
    },
    {
      property: 'recLineDistance',
      description: '检波线距',
      required: false,
    },
    {
      property: 'surveySystemType',
      description: '观测系统类型',
      required: false,
    },
    {
      property: 'sceneDealSystem',
      description: '现场处理系统',
      required: false,
    },
    {
      property: 'minOffset',
      description: '最小偏移距',
      required: false,
    },
    {
      property: 'maxOffset',
      description: '最大偏移距',
      required: false,
    },
    {
      property: 'hypocenterType',
      description: '震源类型',
      required: false,
    },
    {
      property: 'productionRecordSheetNum',
      description: '生产记录张数',
      required: false,
    },
    {
      property: 'coverCount',
      description: '覆盖次数',
      required: false,
    },
    {
      property: 'instrumentReceiveTrackNum',
      description: '仪器接收道数',
      required: false,
    },
    {
      property: 'topGradeSheetNum',
      description: '一级品张数',
      required: false,
    },
    {
      property: 'sencondGradeSheetNum',
      description: '二级品张数',
      required: false,
    },
    {
      property: 'startDate',
      description: '开始日期',
      required: false,
    },
    {
      property: 'endDate',
      description: '结束日期',
      required: false,
    },
    {
      property: 'detectorMode',
      description: '检波器型号',
      required: false,
    },
    {
      property: 'note',
      description: '备注',
      required: false,
    },
  ],
  采集测线坐标: [
    {
      property: 'pointSeqNum',
      description: '测点序号',
      required: false,
    },
    {
      property: 'pointNum',
      description: '测点号',
      required: false,
    },
    {
      property: 'pointType',
      description: '测点类型',
      required: false,
    },
    {
      property: 'geoMapNorth',
      description: '测点北坐标',
      required: false,
    },
    {
      property: 'geoMapEast',
      description: '测点东坐标',
      required: false,
    },
    {
      property: 'groundElevation',
      description: '地面海拔',
      required: false,
    },
  ],
};
