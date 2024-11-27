export const formItems = [
  {
    label: "任务名称",
    componentName: "ElInput",
    key: "name",
    col: 24,
    offset: 0,
    componentOptions: {
      placeholder: "请输入任务名",
      style: {
        width: "100%",
      },
    },
  },
  {
    label: "所属项目",
    componentName: "FormSelect",
    key: "sortMessageFlag",
    col: 12,
    offset: 12,
    componentOptions: {
      style: {},
      list: [
        {
          label: "是",
          value: "1",
        },
        {
          label: "小布家园",
          value: "0",
        },
      ],
    },
  },
  {
    label: "预计起始时间",
    componentName: "el-date-picker",
    key: "preStartDate",
    col: 12,
    offset: 0,
    componentOptions: {
      type: "datetime",
      style: {
        width: "100%",
      },
    },
  },
  {
    label: "预计结束时间",
    componentName: "el-date-picker",
    key: "preEndDate",
    col: 12,
    offset: 0,
    componentOptions: {
      type: "datetime",
      style: {
        width: "100%",
      },
    },
  },
  {
    label: "实际起始时间",
    componentName: "el-date-picker",
    key: "actualStartDate",
    col: 12,
    offset: 0,
    componentOptions: {
      type: "datetime",
      style: {
        width: "100%",
      },
    },
  },
  {
    label: "实际结束时间",
    componentName: "el-date-picker",
    key: "actualEndDate",
    col: 12,
    offset: 0,
    componentOptions: {
      type: "datetime",
      style: {
        width: "100%",
      },
    },
  },

  {
    label: "紧急程度",
    componentName: "DegreeOfUrgency",
    viewComponentName: "DegreeOfUrgency",
    key: "degreeUrgency",
    col: 24,
    offset: 0,
    componentOptions: {
      style: {},
    },
  },
  {
    label: "是否需要提前通知",
    componentName: "FormSelect",
    key: "sortMessageFlag",
    col: 12,
    offset: 0,
    componentOptions: {
      style: {},
      list: [
        {
          label: "是",
          value: "1",
        },
        {
          label: "否",
          value: "0",
        },
      ],
    },
  },
  {
    label: "通知时间",
    componentName: "ElDatePicker",
    key: "preSendDate",
    col: 12,
    offset: 0,
    componentOptions: {
      type: "datetime",
      style: {
        width: "100%",
      },
    },
  },
  {
    label: "任务描述",
    componentName: "ElInput",
    key: "description",
    col: 24,
    offset: 0,
    componentOptions: {
      autosize: {
        minRows: 15,
        maxRows: 30,
      },
      type: "textarea",
    },
  },
];
