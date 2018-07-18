module.exports = {
  id: 'VSP处理解释',
  allRegions: ['处理解释基础数据'],
  处理解释基础数据: [
    {
      property: 'lineNum',
      description: '测线号',
      required: false,
    },
    {
      property: 'processingSoftware',
      description: '处理软件',
      required: false,
    },
    {
      property: 'processingBeginDate',
      description: '处理解释开始时间',
      required: false,
    },
    {
      property: 'processingCompleteDate',
      description: '处理解释完成时间',
      required: false,
    },
    {
      property: 'processingOrg',
      description: '处理单位',
      required: false,
    },
    {
      property: 'projectManager',
      description: '项目长',
      required: false,
    },
    {
      property: 'comments',
      description: '备注',
      required: false,
    },
  ],
};
