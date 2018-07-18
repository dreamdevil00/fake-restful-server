module.exports = {
  id: '微地震采集_压裂井',
  allRegions: ['压裂井属性', '射孔文件属性', '压裂分段'],
  压裂井属性: [
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
      property: 'fracturingWay',
      description: '压裂方式',
      required: false,
    },
    {
      property: 'comments',
      description: '备注',
      required: false,
    },
  ],
  射孔文件属性: [
    {
      property: 'fracturingNumber',
      description: '压裂段号',
      required: false,
    },
    {
      property: 'perforationNumber',
      description: '射孔序号',
      required: false,
    },
    {
      property: 'topDepth',
      description: '顶深（MD）',
      required: false,
    },
    {
      property: 'bottomDepth',
      description: '底深（MD）',
      required: false,
    },
    {
      property: 'fileNumber',
      description: '文件号',
      required: false,
    },
  ],
  压裂分段: [
    {
      property: 'subsectionNumberFracturing',
      description: '压裂分段序号',
      required: false,
    },
    {
      property: 'topDepthFracturing',
      description: '裂段顶深',
      required: false,
    },
    {
      property: 'bottomDepthFracturing',
      description: '裂段底深',
      required: false,
    },
    {
      property: 'startTimeFracturing',
      description: '压裂开始时间',
      required: false,
    },
    {
      property: 'endTimeFracturing',
      description: '压裂结束时间',
      required: false,
    },
  ],
};
