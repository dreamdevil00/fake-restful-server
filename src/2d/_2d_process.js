module.exports = {
  id: '二维处理',
  allRegions: ['处理测线属性', '处理测线坐标', '处理记录'],
  处理测线属性: [
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
  处理测线坐标: [
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
  处理记录: [
    {
      property: 'processOrder',
      description: '处理次序',
      required: false,
    },
    {
      property: 'processOrg',
      description: '处理单位',
      required: false,
    },
    {
      property: 'inboundDate',
      description: '进站日期',
      required: false,
    },
    {
      property: 'outboundDate',
      description: '出站日期',
      required: false,
    },
    {
      property: 'sampleRate',
      description: '处理采样率',
      required: false,
    },
    {
      property: 'recordLength',
      description: '处理记录长度',
      required: false,
    },
    {
      property: 'processMachineModel',
      description: '处理机型',
      required: false,
    },
    {
      property: 'processSoftware',
      description: '处理软件',
      required: false,
    },
    {
      property: 'startCdpNo',
      description: '起始CDP句点',
      required: false,
    },
    {
      property: 'endCdpNo',
      description: '终止CDP句点',
      required: false,
    },
    {
      property: 'startPointX',
      description: '起始点东坐标X',
      required: false,
    },
    {
      property: 'startPointY',
      description: '起始点北坐标Y',
      required: false,
    },
    {
      property: 'endPointX',
      description: '终止点东坐标X',
      required: false,
    },
    {
      property: 'endPointY',
      description: '终止点北坐标Y',
      required: false,
    },
    {
      property: 'processDatumPlane',
      description: '处理基准面',
      required: false,
    },
    {
      property: 'replaceSpeed',
      description: '替换速度',
      required: false,
    },
    {
      property: 'processYear',
      description: '处理年度',
      required: false,
    },
    {
      property: 'note',
      description: '备注',
      required: false,
    },
  ],
};
