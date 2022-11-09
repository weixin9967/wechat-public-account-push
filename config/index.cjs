/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxec6c54761d83cb87',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '5d98be614cc493d1ea02cd399f837d03',

  PROVINCE: '海南省',
  CITY: '三亚',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小李',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRlv55zTQvtEpEJiKv8sXrk_F18E',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Q6qnvl6OLMc9zqHIAGmYPQvT2pyiXm5qSckKj7fpBM0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-12',
      festivals: [
       
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小李', year: '1999', date: '10-12',
        },
       {
         type: '节日', name: '相识纪念日', year: '2022', date: '10-11',
        },
      ],
     
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0H1L0JA_T9DmkM7lHyO4Okqw_8ClSoE_J9YH_LHREnc',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRlv556AwFGcqRYVWPgAJIcM21C4',
    }
  ],

}

module.exports = USER_CONFIG

