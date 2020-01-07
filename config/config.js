export default {

  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      // cssPublicPath: '/public'
    }],
  ],


  routes: [
    // {
    //   path: '/',
    //   component: '../layout',
    //   routes: [
    {
      path: '/user',
      component: '../layout/login',
      routes: [
        {
          path: '/user',
          component: 'user/login',
        }
      ]
    },
    {
      path: '/',
      component: '../layout/home',
      routes: [
        {
          path: '/',
          component: './Helloworld'
        },
        {
          path: '/layoutHelloworld',
          component: './Helloworld.js'
        },
        {
          path: '/layout/helloWorld2',
          component: './HelloWorld2.js'
        },

        {
          path: '/layout/helloWorld3',
          component: 'HelloWorld3.js'
        },

        {
          path: '/layout/helloWorld4',
          component: 'HelloWorld4'
        },


        {
          path: '/layout/text',
          routes: [
            { path: '/layout/text/tabsText', component: 'Text/TabsText' },
            { path: '/layout/text/multipleChoice', component: 'Text/MultipleChoice' },
            { path: '/layout/text/fromText', component: 'Text/FromText' },
            { path: '/layout/text/fromText2', component: 'Text/FromText2' },
            { path: '/layout/text/picturesWall', component: 'Text/PicturesWall' },
            { path: '/layout/text/layui', component: 'Text/Layui' },
            { path: '/layout/text/pingLun', component: 'Text/PingLun' },
            { path: '/layout/text/zouMaDeng', component: 'Text/ZouMaDeng' },
            { path: '/layout/text/biaoGe', component: 'Text/BiaoGe' },
            { path: '/layout/text/newPage', component: 'Text/NewPage' },
            { path: '/layout/text/wangeditor', component: 'Text/Wangeditor' },
            { path: '/layout/text/mianBan', component: 'Text/MianBan' },
          ]
        },

      ]
    },


  ],
  //   },
  // ],
  singular: true,

};






















// export default {

//   plugins: [
//     ['umi-plugin-react', {
//       antd: true,
//       dva: true,
//       // cssPublicPath: '/public'
//     }],
//   ],


//   routes: [{
//     path: '/',
//     component: 'user/login',

//   }, {
//     path: '/register',
//     component: 'user/login/Register',

//   }, {
//     path: '/layout',
//     component: '../layout',
//     routes: [
//       // {
//       //   path: '/layout',
//       //   component: 'Helloworld',
//       // },
//       {
//         path: '/layout/helloworld',
//         component: 'Helloworld.js'
//       },
//       {
//         path: '/layout/helloWorld2',
//         component: 'HelloWorld2.js'
//       },

//       {
//         path: '/layout/helloWorld3',
//         component: 'HelloWorld3.js'
//       },

//       {
//         path: '/layout/helloWorld4',
//         component: 'HelloWorld4'
//       },
//       // {
//       //   path: '/dashboard',
//       //   routes: [
//       //     { path: '/layout/dashboard/analysis', component: 'Dashboard/Analysis' },
//       //     { path: '/layout/dashboard/monitor', component: 'Dashboard/Monitor' },
//       //     { path: '/dashboard/workplace', component: 'Dashboard/Workplace' },
//       //     { path: '/dashboard/aaa', component: 'Dashboard/Aaa' }
//       //   ]
//       // },

//       {
//         path: '/layout/text',
//         routes: [
//           { path: '/layout/text/tabsText', component: 'Text/TabsText' },
//           { path: '/layout/text/multipleChoice', component: 'Text/MultipleChoice' },
//           { path: '/layout/text/fromText', component: 'Text/FromText' },
//           { path: '/layout/text/fromText2', component: 'Text/FromText2' },
//           { path: '/layout/text/picturesWall', component: 'Text/PicturesWall' },
//           { path: '/layout/text/layui', component: 'Text/Layui' },
//           { path: '/layout/text/pingLun', component: 'Text/PingLun' },
//           { path: '/layout/text/zouMaDeng', component: 'Text/ZouMaDeng' },
//           { path: '/layout/text/biaoGe', component: 'Text/BiaoGe' },
//         ]
//       },
//     ]
//   },
//     // , {
//     // path: '/',
//     // component: '',
//     // }
//   ],
//   singular: true,

// };







