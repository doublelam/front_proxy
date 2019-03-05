import { send } from './send';
import moment from 'moment';
import request from 'request';
export const visitsdata = {
  '/__webpack_dev_server__/sockjs.bundle.js': (req, res) => {
    send(res, 'no such file')
  },
  '/test_json': (req, res) => {
    send(res, {
      test: true,
      column: [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      }],
      data: [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }]
    })
  },
  '/test2_json': (req, res) => {
    send(res, {
      test: false,
      data: [5, 6, 7, 8]
    })
  },
  '/r/v1/sites/\\d*/st/visitors/analytics': (req, res) => {
    const days = req.url.match(/\?days=(\d*)/)
    const arrData = new Array(Number(days[1] === '1' ? '24' : days[1])).join(',').split(',').map((v, i) => {
      return {
        "date": moment('06-11 00:00:00').add(i, days[1] === '1' ? 'hours' : 'days'),
        "data": Math.floor(Math.random() * 10000)
      }
    })
    console.log(days, arrData)
    send(res, {
      "status": 200,
      "meta": {
        "devMessage": null,
        "errorKey": null,
        "userMessage": {
          "i18n": {
            "key": null,
            "interpolations": null
          },
          "plain": null
        }
      },
      "data": {
        "summary": {
          "pv": 73513,
          "visitors": 5441,
          "sharings": 1926
        },
        "subSummary": {
          "pv": 14759,
          "visitors": 1550,
          "sharings": 486,
          "start": "2018/05/14",
          "end": "2018/05/21"
        },
        "metrics": {
          "pv": arrData
        },
        "topPv": [
          {
            "title": "联系我们",
            "url": "pages/blog/postDetail/postDetail?postId=1054185",
            "pv": 2812
          },
          {
            "title": "首页",
            "url": "pages/blog/postDetail/postDetail?postId=1054185",
            "pv": 997
          },
          {
            "title": "产品-电商小程序",
            "url": "pages/blog/postDetail/postDetail?postId=1054185",
            "pv": 234
          },
          {
            "title": "产品-服务预约小程序",
            "url": "pages/blog/postDetail/postDetail?postId=1054185",
            "pv": 122
          },
          {
            "title": "博客-白皮书",
            "url": "pages/blog/postDetail/postDetail?postId=1054185",
            "pv": 89
          },
          {
            "title": "博客-技术架构",
            "url": "pages/blog/postDetail/postDetail?postId=1054185",
            "pv": 44
          },
          {
            "title": "博客-2018新社交网络",
            "url": "pages/blog/postDetail/postDetail?postId=1054185",
            "pv": 33
          }
        ].concat(new Array(30).join(',').split(',').map((v, i) => ({
          "title": "test new articles",
          "url": "pages/blog/postDetail/postDetail?postId=1054185",
          "pv": 33 + i
        }))),
        "visitors": {
          "genders": [
            {
              "name": "female",
              "count": 1131
            },
            {
              "name": "male",
              "count": 223
            },
            {
              "name": "none",
              "count": 10
            }
          ],
          "scenes": [
            {
              "name": "1089",
              "count": 525
            },
            {
              "name": "1007",
              "count": 457
            },
            {
              "name": "1001",
              "count": 362
            },
            {
              "name": "1008",
              "count": 85
            },
            {
              "name": "1048",
              "count": 37
            },
            {
              "name": "other",
              "count": 75
            }
          ],
          "cities": [
            {
              "name": "Hebei",
              "count": 0
            },
            {
              "name": "Jiangsu",
              "count": 0
            },
            {
              "name": "Guangdong",
              "count": 0
            },
            {
              "name": "Shanghai",
              "count": 0
            },
            {
              "name": "Zhejiang",
              "count": 0
            },
            {
              "name": "other",
              "count": 0
            }
          ]
        }
      }
    })
  },
  '/r/v1/sites/\\d*/st/visitors': (req, res) => {
    send(res, { "status": 200, "meta": { "devMessage": null, "errorKey": null, "userMessage": { "i18n": { "key": null, "interpolations": null }, "plain": null } }, "data": { "paginationMeta": { "currentPage": 1, "previousPage": null, "nextPage": null, "perPage": 50, "totalPages": 1, "totalCount": 40 }, "visitors": [{ "id": 104631, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq7Jp0tnGKLRCDzGnXujjOn1xsMShS7JRKoiaXfwOF5RfGp75ZErNqFmzpq35KxvIdsGnrw5pgIbibg/132"], "nickname": "GY", "duration": 44656, "pv": 1247, "visitedAt": "2018-06-07 12:13:55", "location": "江苏", "teamMembers": [{ "id": 161, "name": "Jason" }, { "id": 356, "name": "test_don" }] }, { "id": 67998, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTICdHaUk1decCHWcVFEVl3s1ZvIZsO3gMg9yZFjzFqHbwjpzuAdspA351hjiaWrqialqUEVFNw01Nqw/132"], "nickname": "特别的人", "duration": 12794, "pv": 791, "visitedAt": "2018-06-07 12:00:35", "location": "上海", "teamMembers": [] }, { "id": 178973, "photo": [""], "nickname": "gy", "duration": 1813, "pv": 230, "visitedAt": "2018-06-07 11:59:47", "location": "", "teamMembers": [{ "id": 261, "name": "周鑫" }, { "id": 161, "name": "Jason" }, { "id": 321, "name": "young" }, { "id": 337, "name": "zenp" }, { "id": 356, "name": "test_don" }] }, { "id": 68049, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo6va1uBK5glbtwLaNWbAdr8kE9M4ygJSicqJSpZTfanDmrnr5LbhIdH6p4OxkzqZTClW1ibJicXX3ibw/132"], "nickname": "Call Me Young", "duration": 28993, "pv": 1626, "visitedAt": "2018-06-07 11:46:37", "location": "上海", "teamMembers": [{ "id": 161, "name": "Jason" }] }, { "id": 134445, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eruqaxH6bnFLNV4uPqGzpEvSxWpLuptDjPJXIGLVAwOJFfiaKacEvrx3fic0LgnqCOCRoow4ettPWlw/132"], "nickname": "Lam", "duration": 100403, "pv": 1160, "visitedAt": "2018-06-07 11:30:21", "location": "浙江", "teamMembers": [] }, { "id": 68079, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL46acoK4BHbVfP6MxiaM5xRP2ovBUhYJaDfZwTmWBRdR38Qzt9YNH5DqEYYnp1bgfowzJjvCsOV6Q/132"], "nickname": "葛彦斌", "duration": 3088, "pv": 48, "visitedAt": "2018-06-07 10:27:59", "location": "上海", "teamMembers": [{ "id": 161, "name": "Jason" }] }, { "id": 68092, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq59ON4ianEib2zxKZd5ME9lXpibgrJ8fYGLkjKjQLBia1xiae9krJA9GcFxhlCPO55w768ibSjOVVNoJTw/132"], "nickname": "捉虫师 💋", "duration": 429, "pv": 51, "visitedAt": "2018-06-07 10:23:07", "location": "上海", "teamMembers": [{ "id": 161, "name": "Jason" }] }, { "id": 127262, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKEOvIr9r4DWibg5icJWflgLsDMRywzcld5LV7kpgV3WLzlMfyaEoYFCdK4CI9xehzTJcYM0HOeyicaw/132"], "nickname": "daisy", "duration": 67276, "pv": 1857, "visitedAt": "2018-06-07 09:50:49", "location": "上海", "teamMembers": [{ "id": 309, "name": "daniel" }, { "id": 337, "name": "zenp" }, { "id": 161, "name": "Jason" }, { "id": 216, "name": "andy" }, { "id": 261, "name": "周鑫" }, { "id": 209, "name": "zero" }] }, { "id": 198366, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKCfu2zlxCiaMNVLTsF2AC3WRmCxiajFicPa5Wjv16NOr8MopNKdWBScuerIfougZ082EEC5ich6JB7xQ/132"], "nickname": "白滚滚 @ Strikingly", "duration": 25, "pv": 7, "visitedAt": "2018-06-07 06:11:11", "location": "", "teamMembers": [{ "id": 346, "name": "a" }] }, { "id": 68078, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLkw67v0jbI3kOyALS4s8HT1NXNct2cMllWF1y78ibfDKW0AO6QPTVRP5icW3ltOZfgET8fh6WOic5Tw/132"], "nickname": "Richard luo", "duration": 15023, "pv": 531, "visitedAt": "2018-06-07 06:09:05", "location": "上海", "teamMembers": [{ "id": 321, "name": "young" }, { "id": 330, "name": "杰西" }, { "id": 161, "name": "Jason" }] }, { "id": 198363, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoJroUyib201UYpxyrn5xJCGuDE5e31wWBu3VBjzppswthHvf1HbmHgm5rDOuXBqjPjv5tjGQhDq4g/132"], "nickname": "赤雀", "duration": 17, "pv": 4, "visitedAt": "2018-06-07 05:59:14", "location": "上海", "teamMembers": [{ "id": 346, "name": "a" }] }, { "id": 197902, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epvdHpdxRaj1FTeicDcIwU3NoENUicpwGAAicibTG6ngN6lFSeTORLyCicOT2RsSZia14EeT2YicEzsy90mQ/132"], "nickname": "Jack Xiong", "duration": 29, "pv": 5, "visitedAt": "2018-06-07 04:14:18", "location": "上海", "teamMembers": [{ "id": 346, "name": "a" }] }, { "id": 190838, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/pS509mCWl5KD7RSLW3YTTZfKFeiaOIneEYEjFH2GxDgsx57rd4yCC1lBe5m4Hq6gvgXnW3vx1ozHzeUMq2HJL2g/132"], "nickname": "😀666", "duration": 18038, "pv": 19, "visitedAt": "2018-06-07 02:17:38", "location": "", "teamMembers": [{ "id": 161, "name": "Jason" }, { "id": 337, "name": "zenp" }, { "id": 321, "name": "young" }] }, { "id": 134288, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJpUVEPHtFUjdUfcen9Qkympk6vTWIyamcibWic9rr68DVCMxAicNu2t1CiawmDu0pR2eMIVsn79EnVnw/132"], "nickname": "꯭王꯭大꯭屁꯭帅꯭", "duration": 11649, "pv": 185, "visitedAt": "2018-06-06 08:58:50", "location": "辽宁", "teamMembers": [{ "id": 337, "name": "zenp" }] }, { "id": 186518, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLcCiaVj1IWesHqPdOOTcZaTzEKuVVD0ne65XYXP738OYdUO8XAObich5kv4lzb9Wq7N9xnHCGgbrmg/132"], "nickname": "🌝Definitely Maybe🌚", "duration": 1520, "pv": 184, "visitedAt": "2018-06-06 08:31:18", "location": "上海", "teamMembers": [] }, { "id": 193932, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/FmwWpyD4ym7RuVFicobJCSByPehfiaeNyoic24wbnicnmbPwFD2jrWWy9P7edrv2CSDdFueSEn7dTvPrsKyNibMdCiaw/132"], "nickname": "Mr丶冥鸦", "duration": 219, "pv": 20, "visitedAt": "2018-06-06 07:51:28", "location": "河南", "teamMembers": [{ "id": 337, "name": "zenp" }] }, { "id": 193890, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKWwcgRtqcQyRA0ib3exsc3tkc2hXuibdsXeib68Hpk1VeYduy0GumwSIj7xWMowZo0XPic4KtVA4MK0Q/132"], "nickname": "嘉图", "duration": 202, "pv": 16, "visitedAt": "2018-06-06 07:41:20", "location": "", "teamMembers": [{ "id": 337, "name": "zenp" }] }, { "id": 185734, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erv2oic9QvENuzLicbnR8B6NZUcmHOt7rvYZZtiaUJCicATzZqZHRkTPic26SSNYWsJj8OWlZEd2dXXLvw/132"], "nickname": "James", "duration": 489, "pv": 38, "visitedAt": "2018-06-06 07:15:17", "location": "Wellington", "teamMembers": [{ "id": 337, "name": "zenp" }, { "id": 321, "name": "young" }] }, { "id": 193618, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/yTn9elsxHxxPo6n6KZhPZPNoeXpicxicDHFyia5hje9zWn3yFMbu9DK4eTJyM1DtWNwKRviaOrWRHpoSxU6EYXh5qA/132"], "nickname": "乱了谁的盛世芳华＊", "duration": 78, "pv": 8, "visitedAt": "2018-06-06 06:55:33", "location": "上海", "teamMembers": [] }, { "id": 179421, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/gwJcibg8V5ibAdoYFoBZ6eJpeHKTHrgejduriba4ico72SO69IZFydQnl6eWhf7BgAJErgqibrJLfSzlaHshmhJOm9w/132"], "nickname": "桃子dw", "duration": 796, "pv": 64, "visitedAt": "2018-06-06 03:46:05", "location": "江苏", "teamMembers": [] }, { "id": 68126, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/1k2QGK3M1iaiahxzq6PRjayJRXsEoEXr2nv6hzPwdSfEDnicIsUXusMySwYAEUrXM61ebeBiaymClCWMT5TGbIuTHg/132"], "nickname": "邹震坤", "duration": 59554, "pv": 236, "visitedAt": "2018-06-05 06:55:40", "location": "", "teamMembers": [] }, { "id": 73713, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo6Ax9iavkHljQTfCV0Lc9Oibib2icdndA8PA51I0d900ibVH6f0uU55Q33iczibYmicCNF3VDqe36Ljicd1ww/132"], "nickname": "一圈儿", "duration": 355, "pv": 25, "visitedAt": "2018-06-04 10:31:30", "location": "上海", "teamMembers": [{ "id": 161, "name": "Jason" }] }, { "id": 186448, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq2DHEtnqWIgz2wpqhRzianUCqBBQ5CSfojbrAJe1rCXHibMSZaeJKuGib5PojW5IG8KlfhPpibbQQ3JA/132"], "nickname": "Joyce@sxl.cn", "duration": 34, "pv": 7, "visitedAt": "2018-06-04 10:11:42", "location": "上海", "teamMembers": [] }, { "id": 185558, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/pn1RQkyXjxib7vg71GhicSt6vqFzxXMbKYbDQhx11tQ64eicAG6tGPgwfBSRFZyHWHRLpztr4WN4Z3Z1dfrDcugng/132"], "nickname": "刘某某", "duration": 5349, "pv": 197, "visitedAt": "2018-06-04 06:31:21", "location": "", "teamMembers": [{ "id": 321, "name": "young" }] }, { "id": 185950, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ersGVjXH7o4b6LykHgibtCqeFFJgYkpFyLh9obbbyNP4WM4ibdMmB81UMIst0k3vibawvS1YLjsQibgMw/132"], "nickname": "SF", "duration": 149, "pv": 15, "visitedAt": "2018-06-04 04:59:15", "location": "California", "teamMembers": [{ "id": 321, "name": "young" }] }, { "id": 150863, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/kzdcnianU6KGfKFym2NzbE52rP4UTCEcwJVjaick59SPwib33ko2BH9J7lH5PxJybhodBmMBX7w4RdevTfhDIo97Q/132"], "nickname": "安宁nick", "duration": 546, "pv": 32, "visitedAt": "2018-06-04 03:43:54", "location": "New South Wales", "teamMembers": [{ "id": 321, "name": "young" }, { "id": 161, "name": "Jason" }] }, { "id": 67028, "photo": [""], "nickname": "rdgztest_DWOMTK", "duration": 939, "pv": 282, "visitedAt": "2018-06-04 02:41:44", "location": "", "teamMembers": [] }, { "id": 73721, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLxytGicVhXcra2F3RvIhEZ5w9zCMk6Oj9avuk7RlPRy3laA7EHdias6rhCItPkWlp8cHJptmDE1y0w/132"], "nickname": "唐三丶", "duration": 2498, "pv": 86, "visitedAt": "2018-06-04 02:21:05", "location": "上海", "teamMembers": [{ "id": 321, "name": "young" }, { "id": 161, "name": "Jason" }] }, { "id": 176655, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eouM24M1T6BvOygpKjchOpoDseia92RmgQXxIeCrKZwGDwNicJY6s4RSpic6DaqRSNJwOdhtONic48icibQ/132"], "nickname": "🍓jessie", "duration": 992, "pv": 42, "visitedAt": "2018-06-03 14:12:15", "location": "上海", "teamMembers": [{ "id": 161, "name": "Jason" }, { "id": 261, "name": "周鑫" }, { "id": 321, "name": "young" }] }, { "id": 69359, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKqg5poqcBugspq9qKgDAbQm3VPsdU3EZGZgbvXtPKklbAXOslYjeBVriclcNlr4D8RDyUibtlBWpibQ/132"], "nickname": "🐱", "duration": 1840, "pv": 94, "visitedAt": "2018-06-03 14:03:42", "location": "Buenos Aires", "teamMembers": [{ "id": 161, "name": "Jason" }] }, { "id": 179423, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLK4NPyaFDl4rH7Z2AGCqM5P1QPGO3AZ4Anh62QjiahU9u0hnsMCDSnLK14tGiamfbia6loTKpoZzcRw/132"], "nickname": "bubber..c", "duration": 186, "pv": 11, "visitedAt": "2018-06-02 14:42:00", "location": "北京", "teamMembers": [] }, { "id": 150637, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/o8kfJ2BTsW8Zv6TPTkfXgRUk0uEhVzXAW1B4W8QyWev88BydPYm6yB4OTFKCATaH2csdUJ5oMGv3sBsr71kNUQ/132"], "nickname": "Cheng", "duration": 4038, "pv": 174, "visitedAt": "2018-05-30 02:04:47", "location": "", "teamMembers": [{ "id": 261, "name": "周鑫" }, { "id": 209, "name": "zero" }, { "id": 208, "name": "Allen" }] }, { "id": 68031, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqIg5SAsQwBQ7aoPzasWf4YKKGuL7ibS5VZfXQcP4kWmFNWMY3uRibU9lYJsDkpmT5YGJkzSLAQqudg/132"], "nickname": "Marvin.strikingly", "duration": 773, "pv": 46, "visitedAt": "2018-05-29 06:18:14", "location": "上海", "teamMembers": [{ "id": 161, "name": "Jason" }] }, { "id": 151007, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epGxcoRib9ia7HkXQeuicJslT3jCIibRTlspJbUxOPJtcr0iaeNgodQUxcoJHjEQibgAws44QApgKaawia2A/132"], "nickname": "Baymax", "duration": 944, "pv": 123, "visitedAt": "2018-05-27 10:09:45", "location": "上海", "teamMembers": [{ "id": 161, "name": "Jason" }, { "id": 209, "name": "zero" }] }, { "id": 96152, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJsAzWfG8S3R0bQx98brUvnB40f0bibZ4FDsVMpIhcLm7icuIlahTmRyrJcx2hchxgDyTkiaJN2hhCTg/132"], "nickname": "山大王", "duration": 129, "pv": 13, "visitedAt": "2018-05-15 07:34:06", "location": "四川", "teamMembers": [{ "id": 161, "name": "Jason" }] }, { "id": 69298, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erWkh84kbDFibUGeaYfias1wx0Svwkf03PQYVqibG7bPHc84PbDYDFhbKco7iblF0iagcwqVj2p26Ar0ng/132"], "nickname": "Collin", "duration": 16, "pv": 2, "visitedAt": "2018-05-08 11:00:17", "location": "", "teamMembers": [{ "id": 161, "name": "Jason" }] }, { "id": 69248, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epJ874lSjJxf5fmvBDkCHIzr8Ys84wkZxr13OaWa69wJajSxC87Ot6VAVOB9b5YjicBswIBsoshN2w/132"], "nickname": "待续 呐情", "duration": 14, "pv": 1, "visitedAt": "2018-05-08 10:35:11", "location": "", "teamMembers": [{ "id": 161, "name": "Jason" }] }, { "id": 68023, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epqBFS5JhI79GOUH8UdHSos9eVBM5uiaHo6tS6JUrM3KXjJSJ2tuia7D14bgBBzRxNzC9VS7W4JVkwg/132"], "nickname": "nanos", "duration": 4, "pv": 2, "visitedAt": "2018-05-08 04:59:55", "location": "上海", "teamMembers": [{ "id": 161, "name": "Jason" }] }, { "id": 68004, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/a7T8UU4LexUPYeDGSLh2olicL38aZozLHMWnBMHSYvqH2vFvLiaP2RjlQGic4HcicTfViavthJw9e6XLzCtOkX3PicNg/132"], "nickname": "Lisa", "duration": 1456, "pv": 62, "visitedAt": "2018-05-08 02:46:40", "location": "上海", "teamMembers": [{ "id": 161, "name": "Jason" }] }, { "id": 67865, "photo": ["https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJB0vmbnLV0cM157msru4Kcdsic7v60aY2epfXibeBu3JVa2ic2KCM3gnqfJ9KwUSBaB6vZG9eYicjaZQ/132"], "nickname": "Icarus", "duration": 16, "pv": 6, "visitedAt": "2018-05-07 23:38:42", "location": "", "teamMembers": [] }] } }
    )
  },
  '/r/v1/sites/\\d*/st/team_members': (req, res) => {
    send(res, {
      "status": 200,
      "meta": {
        "devMessage": null,
        "errorKey": null,
        "userMessage": {
          "i18n": {
            "key": null,
            "interpolations": null
          },
          "plain": null
        }
      },
      "data": {
        "paginationMeta": {
          "currentPage": 1,
          "previousPage": null,
          "nextPage": null,
          "perPage": 100,
          "totalPages": 1,
          "totalCount": 10
        },
        "teamMembers": [
          {
            "id": 1,
            "profile": {
              "wechatAccount": "",
              "position": "测试职位",
              "showWechatAccount": false,
              "name": "测试姓名",
              "phone": "11111111111",
              "avatar": "https://robohash.org/1.png?set=set3",
              "email": "",
              "showEmail": false
            },
            "verified": true,
            "feedbackCount": 0,
            "wechatAccount": null
          },
          {
            "id": 2,
            "profile": {
              "wechatAccount": "",
              "position": "测试职位",
              "showWechatAccount": false,
              "name": "测试姓名",
              "phone": "11111111111",
              "avatar": "https://robohash.org/1.png?set=set3",
              "email": "",
              "showEmail": false
            },
            "verified": true,
            "feedbackCount": 0,
            "wechatAccount": null
          }
        ].concat(new Array(500).join(',').split(',').map((v, i) => ({
          "id": i + 3,
          "profile": {
            "wechatAccount": "",
            "position": "测试职位",
            "showWechatAccount": false,
            "name": "测试姓名",
            "phone": "11111111111",
            "avatar": "https://robohash.org/1.png?set=set3",
            "email": "",
            "showEmail": false
          },
          "verified": true,
          "feedbackCount": 0,
          "wechatAccount": null
        })))
      }
    })
  },
  '/r/v1/sites/\\d*/st/feedbacks': (req, res) => {
    send(res, {
      test: false,
      data: {
        "paginationMeta": {
          "currentPage": 2,
          "previousPage": 1,
          "nextPage": 3,
          "perPage": 10,
          "totalPages": 8,
          "totalCount": 75
        },
        feedbacks: [{
          id: 1,
          name: 'lili',
          phone: '13323231111',
          teamMemberName: 'daisy',
          rate: '1',
          content: '特别靠谱，是我喜欢的类型，因为你更加信任！',
          createdAt: "2018-05-14T03:02:51.560Z"
        },]
      }
    })
  },
  '/r/v1/sites/\\d*/st/team_members': (req, res) => {
    send(res, { "status": 200, "meta": { "devMessage": null, "errorKey": null, "userMessage": { "i18n": { "key": null, "interpolations": null }, "plain": null } }, "data": { "paginationMeta": { "currentPage": 1, "previousPage": null, "nextPage": 2, "perPage": 10, "totalPages": 8, "totalCount": 71 }, "teamMembers": [{ "id": 216, "profile": { "color": "#f1c45d", "wechatAccount": "asd", "roundAvatarUrl": "https://user-assets.sxlcdn.com/images/374286/FsvF5bxUpODO5pUTkeKCD19bQIAZ.jpeg?imageView2/1/w/300/h/300/format/jpeg|roundPic/radius/!50p", "position": "工程师", "personalExperience": "dhfnfnfn", "name": "andy", "phone": "15909619814", "createAt": "2018-05-28T04:04:41.845Z", "wechatQrcode": {}, "address": { "name": "", "address": "sdhhdh" }, "role": 2, "avatarUrl": "https://user-assets.sxlcdn.com/images/374286/FsvF5bxUpODO5pUTkeKCD19bQIAZ.jpeg?imageView2/1/w/300/h/400/format/jpeg", "teams": [], "signature": "dhdhbf", "tags": [{ "value": "热情", "selected": false }, { "value": "大方", "selected": false }, { "value": "耐心", "selected": false }, { "value": "诚信", "selected": false }, { "value": "暖男", "selected": false }, { "value": "外向", "selected": false }, { "value": "豁达", "selected": false }, { "value": "踏实", "selected": false }, { "value": "坚韧", "selected": false }, { "value": "无畏", "selected": false }, { "value": "执着", "selected": false }, { "value": "正直", "selected": false }, { "value": "自信", "selected": false }, { "value": "稳重", "selected": false }, { "value": "客户至上", "selected": false }, { "value": "善于沟通", "selected": false }, { "value": "经验丰富", "selected": false }, { "value": "效率极高", "selected": false }], "avatar": { "size": 6760, "storageKey": "images/374286/FsvF5bxUpODO5pUTkeKCD19bQIAZ.jpeg", "meta": {}, "width": 225, "height": 225, "url": "!", "format": "jpeg", "thumbUrl": "!", "storage": "qn" }, "photoWall": [{ "size": 71452, "storageKey": "images/379493/FvRQyup4gKydRy1COwmewfyaLBZ6.jpg", "width": 640, "height": 854, "imageInfo": { "colorModel": "ycbcr", "format": "jpeg", "height": 854, "size": 71452, "width": 640 }, "hash": "FvRQyup4gKydRy1COwmewfyaLBZ6", "mimeType": "image/jpeg", "format": "jpeg", "storage": "qn" }], "email": "ttest@hotmail.com" }, "verified": true, "feedbackCount": 4, "qrCode": { "caption": "", "description": "", "format": "jpeg", "linkUrl": "", "newTarget": true, "storage": "qn", "storageKey": "mini_program/team_member_qr_image_213.jpeg", "thumbUrl": "!", "type": "image", "url": "!" }, "wechatAccount": { "id": 114700, "userId": null, "unionId": "o9S25uLKpLnyveZekm669owBV_AY", "openId": null, "mpOpenId": "oFhZJwFJXdBNCWkhSg80IPFinFnM", "groupId": null, "nickname": "adang", "logoUrl": "http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCSpr5Esz55KJrJFfWJvTOXvYVv3kN9J794dUVA49aB2aUZW8A2mZWIvDGQ7kvjzEjMicyzefRfpuWv3Kvo7HWpvg1zR62IItPY/132", "gender": "male", "language": "zh_CN", "country": "中国", "province": "宁夏", "city": "银川", "remark": null, "subscribed": false, "subscribedAt": null, "bound": false, "boundAt": null, "mobileOpenId": null }, "welcomeMessage": null, "autoReply": null }, { "id": 258, "profile": { "color": "#f1c45d", "position": "Test", "name": "牛夫人", "phone": "19728384932", "createAt": "2018-05-30T07:07:34.122Z", "role": 2, "teams": [], "tags": [{ "value": "热情", "selected": false }, { "value": "大方", "selected": false }, { "value": "耐心", "selected": false }, { "value": "诚信", "selected": false }, { "value": "暖男", "selected": false }, { "value": "外向", "selected": false }, { "value": "豁达", "selected": false }, { "value": "踏实", "selected": false }, { "value": "坚韧", "selected": false }, { "value": "无畏", "selected": false }, { "value": "执着", "selected": false }, { "value": "正直", "selected": false }, { "value": "自信", "selected": false }, { "value": "稳重", "selected": false }, { "value": "客户至上", "selected": false }, { "value": "善于沟通", "selected": false }, { "value": "经验丰富", "selected": false }, { "value": "效率极高", "selected": false }], "avatar": { "size": 51594, "storageKey": "images/128127/Fre8y6zELCV_bjrBLEOVgGm7_uYn.png", "meta": {}, "width": 200, "height": 190, "url": "!", "format": "png", "thumbUrl": "!", "storage": "qn" } }, "verified": false, "feedbackCount": 0, "wechatAccount": null, "welcomeMessage": null, "autoReply": null }, { "id": 261, "profile": { "avatar": { "size": 37083, "storageKey": "images/153823/Fuh54ivwynvVGrb62HiSdxrV62d8.png", "meta": {}, "width": 360, "height": 360, "url": "!", "format": "png", "thumbUrl": "!", "storage": "qn" }, "name": "周鑫", "position": "后端开发", "phone": "13816680619", "createAt": "2018-05-30T08:30:34.326Z", "tags": [{ "value": "热情", "selected": false }, { "value": "大方", "selected": false }, { "value": "耐心", "selected": false }, { "value": "诚信", "selected": false }, { "value": "暖男", "selected": false }, { "value": "外向", "selected": false }, { "value": "豁达", "selected": false }, { "value": "踏实", "selected": false }, { "value": "坚韧", "selected": false }, { "value": "无畏", "selected": false }, { "value": "执着", "selected": false }, { "value": "正直", "selected": false }, { "value": "自信", "selected": false }, { "value": "稳重", "selected": false }, { "value": "客户至上", "selected": false }, { "value": "善于沟通", "selected": false }, { "value": "经验丰富", "selected": false }, { "value": "效率极高", "selected": false }], "role": 2, "teams": [{ "id": 11001, "name": "测试组" }] }, "verified": true, "feedbackCount": 1, "qrCode": { "caption": "", "description": "", "format": "jpeg", "linkUrl": "", "newTarget": true, "storage": "qn", "storageKey": "mini_program/team_member_qr_image_248.jpeg", "thumbUrl": "!", "type": "image", "url": "!" }, "wechatAccount": null, "welcomeMessage": null, "autoReply": null }, { "id": 304, "profile": { "avatar": { "storageKey": "images/164686/Fgat9Ej8_qaVFmobyevSd0z-WqtG.jpeg", "storage": "qn", "height": 430, "width": 430, "format": "jpg", "size": 107111, "Url": "!", "ThumbUrl": "!", "meta": {} }, "name": "测试2", "position": "test2", "phone": "16602103358", "createAt": "2018-06-02T02:04:15.929Z", "tags": [{ "value": "热情", "selected": false }, { "value": "大方", "selected": false }, { "value": "耐心", "selected": false }, { "value": "诚信", "selected": false }, { "value": "暖男", "selected": false }, { "value": "外向", "selected": false }, { "value": "豁达", "selected": false }, { "value": "踏实", "selected": false }, { "value": "坚韧", "selected": false }, { "value": "无畏", "selected": false }, { "value": "执着", "selected": false }, { "value": "正直", "selected": false }, { "value": "自信", "selected": false }, { "value": "稳重", "selected": false }, { "value": "客户至上", "selected": false }, { "value": "善于沟通", "selected": false }, { "value": "经验丰富", "selected": false }, { "value": "效率极高", "selected": false }], "role": 2, "teams": [] }, "verified": true, "feedbackCount": 1, "qrCode": { "caption": "", "description": "", "format": "jpeg", "linkUrl": "", "newTarget": true, "storage": "qn", "storageKey": "mini_program/team_member_qr_image_307.jpeg", "thumbUrl": "!", "type": "image", "url": "!" }, "wechatAccount": { "id": 115513, "userId": null, "unionId": "o9S25uFCTXJNWYIwuQz2tT578Y3k", "openId": null, "mpOpenId": "oFhZJwN_hsWb5IqLlAt-HPRO5o5o", "groupId": null, "nickname": "可可", "logoUrl": "http://thirdwx.qlogo.cn/mmopen/ibeu6Pw3MSshG7ejVz5quyZiae6VgPDAfe3l65z32VdiambEmZqgc4icA9ibqonCy2kqhyW4o3Ry28QqgUib8SskSbheHhRkvjCMWm/132", "gender": "male", "language": "zh_CN", "country": "中国", "province": "江苏", "city": "南通", "remark": null, "subscribed": false, "subscribedAt": null, "bound": false, "boundAt": null, "mobileOpenId": null }, "welcomeMessage": null, "autoReply": null }, { "id": 309, "profile": { "avatar": { "size": 43894, "storageKey": "images/280566/FrRAa4WaeRKfpV8Ke7een_W1jSPo.jpeg", "meta": {}, "width": 400, "height": 400, "url": "!", "format": "jpeg", "thumbUrl": "!", "storage": "qn" }, "name": "daniel", "position": "tech leader", "phone": "13774367767", "createAt": "2018-06-02T04:36:25.377Z", "tags": [{ "value": "热情", "selected": false }, { "value": "大方", "selected": false }, { "value": "耐心", "selected": false }, { "value": "诚信", "selected": false }, { "value": "暖男", "selected": false }, { "value": "外向", "selected": false }, { "value": "豁达", "selected": false }, { "value": "踏实", "selected": false }, { "value": "坚韧", "selected": false }, { "value": "无畏", "selected": false }, { "value": "执着", "selected": false }, { "value": "正直", "selected": false }, { "value": "自信", "selected": false }, { "value": "稳重", "selected": false }, { "value": "客户至上", "selected": false }, { "value": "善于沟通", "selected": false }, { "value": "经验丰富", "selected": false }, { "value": "效率极高", "selected": false }], "role": 2, "teams": [] }, "verified": true, "feedbackCount": 0, "qrCode": { "caption": "", "description": "", "format": "jpeg", "linkUrl": "", "newTarget": true, "storage": "qn", "storageKey": "mini_program/team_member_qr_image_313.jpeg", "thumbUrl": "!", "type": "image", "url": "!" }, "wechatAccount": { "id": 2, "userId": 10, "unionId": "o9S25uMKiqnOzHhVx3_BP_3hKGAQ", "openId": "oyCMMwC-sQIqR59-BnoOqPkEMtW0", "mpOpenId": "oFhZJwClc7LF2oXwHnVUw5XWMAQI", "groupId": 103, "nickname": "龚凌晖", "logoUrl": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBw9MLsnZEOPfztMicXCQumGgbQzURl6iclm4ue9vciaKKVOU6kcxECX4ovkW5ALMnNNjicEdIrwI6OQ/132", "gender": "male", "language": "zh_CN", "country": "CN", "province": "Shanghai", "city": "Changning", "remark": "", "subscribed": true, "subscribedAt": "2016-03-16T02:18:56.000-07:00", "bound": true, "boundAt": "2016-03-22T22:47:38.350-07:00", "mobileOpenId": "oOqjZwE9fQoOhYBONloGmRBN5N9s" }, "welcomeMessage": null, "autoReply": null }, { "id": 330, "profile": { "color": "#f1c45d", "wechatAccount": "huhh", "roundAvatarUrl": "https://user-assets.sxlcdn.com/images/24978/Fi1_0B3-Xvgzwy8DrT-OLG6E0fgN.png?imageView2/1/w/300/h/300/format/png|roundPic/radius/!50p", "position": "产品设计师", "name": "杰西", "phone": "18621863084", "createAt": "2018-06-04T09:27:52.408Z", "wechatQrcode": { "size": 28659, "storageKey": "images/379493/FtM4ShZFZrmbECu3IHNQMD_OfFfV.jpg", "width": 258, "height": 258, "imageInfo": { "colorModel": "ycbcr", "format": "jpeg", "height": 258, "size": 28659, "width": 258 }, "hash": "FtM4ShZFZrmbECu3IHNQMD_OfFfV", "mimeType": "image/jpeg", "format": "jpeg", "storage": "qn" }, "address": { "address": "上海市隐忍(大学路店)", "errMsg": "chooseLocation:ok", "poiid": "City", "latitude": 31.3036935346555, "name": "隐忍(大学路店)", "longitude": 121.508818566799 }, "role": 1, "avatarUrl": "https://user-assets.sxlcdn.com/images/24978/Fi1_0B3-Xvgzwy8DrT-OLG6E0fgN.png?imageView2/1/w/300/h/400/format/png", "teams": [{ "id": 11001, "name": "测试组" }], "tags": [{ "value": "热情", "selected": false }, { "value": "大方", "selected": false }, { "value": "耐心", "selected": false }, { "value": "诚信", "selected": false }, { "value": "暖男", "selected": false }, { "value": "外向", "selected": false }, { "value": "豁达", "selected": false }, { "value": "踏实", "selected": false }, { "value": "坚韧", "selected": false }, { "value": "无畏", "selected": false }, { "value": "执着", "selected": false }, { "value": "正直", "selected": false }, { "value": "自信", "selected": false }, { "value": "稳重", "selected": false }, { "value": "客户至上", "selected": false }, { "value": "善于沟通", "selected": false }, { "value": "经验丰富", "selected": false }, { "value": "效率极高", "selected": false }], "avatar": { "size": 31764, "storageKey": "images/24978/Fi1_0B3-Xvgzwy8DrT-OLG6E0fgN.png", "meta": {}, "width": 2083, "height": 2083, "url": "!", "format": "png", "thumbUrl": "!", "storage": "qn" }, "photoWall": [], "email": "ha@gmail.com" }, "verified": true, "feedbackCount": 0, "qrCode": { "caption": "", "description": "", "format": "jpeg", "linkUrl": "", "newTarget": true, "storage": "qn", "storageKey": "mini_program/team_member_qr_image_338.jpeg", "thumbUrl": "!", "type": "image", "url": "!" }, "wechatAccount": null, "welcomeMessage": null, "autoReply": null }, { "id": 393, "profile": { "color": "#7586ab", "wechatAccount": "djw9692", "roundAvatarUrl": "https://user-assets.sxlcdn.com/images/379493/Fsv99Gma-WNmoCYjMaLJARhVf1Xi.jpg?imageView2/1/w/300/h/300/format/jpeg|roundPic/radius/!50p", "position": "销售经理", "name": "戴佳伟", "phone": "19805505558", "createAt": "2018-06-08T09:35:45.158Z", "wechatQrcode": { "storageKey": "images/379493/Fkd3yRPkXF-VrOBCCcOvvBdbB5NC.jpg", "hash": "Fkd3yRPkXF-VrOBCCcOvvBdbB5NC", "width": 674, "height": 896, "size": 96386, "imageInfo": { "colorModel": "ycbcr", "format": "jpeg", "height": 896, "orientation": "Top-left", "size": 96386, "width": 674 }, "mimeType": "image/jpeg", "format": "jpeg", "storage": "qn" }, "address": { "address": "江苏省南京市鼓楼区汉中路180号", "errMsg": "chooseLocation:ok", "poiid": "qqmap_12763008950351481376", "latitude": 32.0435071865406, "name": "星汉大厦", "longitude": 118.772109746933 }, "role": 2, "avatarUrl": "https://user-assets.sxlcdn.com/images/379493/Fsv99Gma-WNmoCYjMaLJARhVf1Xi.jpg?imageView2/1/w/300/h/400/format/jpeg", "teams": [], "tags": [{ "value": "热情", "selected": false }, { "value": "大方", "selected": false }, { "value": "耐心", "selected": false }, { "value": "诚信", "selected": false }, { "value": "暖男", "selected": false }, { "value": "外向", "selected": false }, { "value": "豁达", "selected": false }, { "value": "踏实", "selected": false }, { "value": "坚韧", "selected": false }, { "value": "无畏", "selected": false }, { "value": "执着", "selected": false }, { "value": "正直", "selected": false }, { "value": "自信", "selected": false }, { "value": "稳重", "selected": false }, { "value": "客户至上", "selected": false }, { "value": "善于沟通", "selected": false }, { "value": "经验丰富", "selected": false }, { "value": "效率极高", "selected": false }], "avatar": { "size": 102972, "storageKey": "images/379493/Fsv99Gma-WNmoCYjMaLJARhVf1Xi.jpg", "meta": {}, "width": 1352, "height": 1079, "url": "!", "format": "jpeg", "thumbUrl": "!", "storage": "qn" }, "photoWall": [] }, "verified": true, "feedbackCount": 0, "qrCode": { "caption": "", "description": "", "format": "jpeg", "linkUrl": "", "newTarget": true, "storage": "qn", "storageKey": "mini_program/team_member_qr_image_385.jpeg", "thumbUrl": "!", "type": "image", "url": "!" }, "wechatAccount": null, "welcomeMessage": null, "autoReply": null }, { "id": 394, "profile": { "color": "#f1c45d", "wechatAccount": "baiyun5240", "roundAvatarUrl": "https://user-assets.sxlcdn.com/images/379493/FtpsldPURRcqShSQP3KpzSRItfD8.jpg?imageView2/1/w/300/h/300/format/jpg|roundPic/radius/!50p", "position": "销售顾问", "name": "张华云", "phone": "13260820522", "createAt": "2018-06-08T09:48:12.029Z", "wechatQrcode": { "size": 102301, "storageKey": "images/379493/FldsiRKtEkgx1lXDKZbPtjgmxKnj.jpg", "width": 752, "height": 974, "imageInfo": { "colorModel": "ycbcr", "format": "jpeg", "height": 974, "size": 102301, "width": 752 }, "hash": "FldsiRKtEkgx1lXDKZbPtjgmxKnj", "mimeType": "image/jpeg", "format": "jpeg", "storage": "qn" }, "address": { "name": "", "address": "星汉大厦21楼d2129" }, "role": 2, "avatarUrl": "https://user-assets.sxlcdn.com/images/379493/FtpsldPURRcqShSQP3KpzSRItfD8.jpg?imageView2/1/w/300/h/400/format/jpg", "teams": [], "signature": "趋势就是财富的源泉", "tags": [{ "value": "热情", "selected": false }, { "value": "大方", "selected": false }, { "value": "耐心", "selected": false }, { "value": "诚信", "selected": false }, { "value": "暖男", "selected": false }, { "value": "外向", "selected": false }, { "value": "豁达", "selected": false }, { "value": "踏实", "selected": false }, { "value": "坚韧", "selected": false }, { "value": "无畏", "selected": false }, { "value": "执着", "selected": false }, { "value": "正直", "selected": false }, { "value": "自信", "selected": false }, { "value": "稳重", "selected": false }, { "value": "客户至上", "selected": false }, { "value": "善于沟通", "selected": false }, { "value": "经验丰富", "selected": false }, { "value": "效率极高", "selected": false }], "avatar": { "size": 168006, "storageKey": "images/379493/FtpsldPURRcqShSQP3KpzSRItfD8.jpg", "meta": {}, "width": 1080, "height": 1438, "url": "!", "format": "jpg", "thumbUrl": "!", "storage": "qn" }, "photoWall": [], "email": "1639341099@qq.com" }, "verified": true, "feedbackCount": 1, "qrCode": { "caption": "", "description": "", "format": "jpeg", "linkUrl": "", "newTarget": true, "storage": "qn", "storageKey": "mini_program/team_member_qr_image_386.jpeg", "thumbUrl": "!", "type": "image", "url": "!" }, "wechatAccount": null, "welcomeMessage": "您好，很高兴为你服务^_^", "autoReply": "您好" }, { "id": 395, "profile": { "color": "#f1c45d", "wechatAccount": "lxy962464-0128", "roundAvatarUrl": "https://user-assets.sxlcdn.com/images/379493/FniLuUFj5J9gZvktf_CyvL5UaYL0.jpg?imageView2/1/w/300/h/300/format/jpeg|roundPic/radius/!50p", "position": "销售顾问", "name": "李雪源", "phone": "13770536234", "createAt": "2018-06-08T09:50:48.726Z", "wechatQrcode": { "size": 40334, "storageKey": "images/379493/FuNrgpnkRg7Asvvx3sG-zgzXCHsu.jpg", "width": 430, "height": 430, "imageInfo": { "colorModel": "ycbcr", "format": "jpeg", "height": 430, "size": 40334, "width": 430 }, "hash": "FuNrgpnkRg7Asvvx3sG-zgzXCHsu", "mimeType": "image/jpeg", "format": "jpeg", "storage": "qn" }, "address": { "name": "", "address": "江苏省南京市鼓楼区汉中路180号星汉大厦21楼D座2129" }, "role": 2, "avatarUrl": "https://user-assets.sxlcdn.com/images/379493/FniLuUFj5J9gZvktf_CyvL5UaYL0.jpg?imageView2/1/w/300/h/400/format/jpeg", "teams": [], "signature": "选择大于努力。", "tags": [{ "value": "热情", "selected": false }, { "value": "大方", "selected": false }, { "value": "耐心", "selected": false }, { "value": "诚信", "selected": false }, { "value": "暖男", "selected": false }, { "value": "外向", "selected": false }, { "value": "豁达", "selected": false }, { "value": "踏实", "selected": false }, { "value": "坚韧", "selected": false }, { "value": "无畏", "selected": false }, { "value": "执着", "selected": false }, { "value": "正直", "selected": false }, { "value": "自信", "selected": false }, { "value": "稳重", "selected": false }, { "value": "客户至上", "selected": false }, { "value": "善于沟通", "selected": false }, { "value": "经验丰富", "selected": false }, { "value": "效率极高", "selected": false }], "avatar": { "size": 58809, "storageKey": "images/379493/FniLuUFj5J9gZvktf_CyvL5UaYL0.jpg", "meta": {}, "width": 720, "height": 1280, "url": "!", "format": "jpeg", "thumbUrl": "!", "storage": "qn" }, "photoWall": [], "email": "826075166@qq.com" }, "verified": true, "feedbackCount": 0, "qrCode": { "caption": "", "description": "", "format": "jpeg", "linkUrl": "", "newTarget": true, "storage": "qn", "storageKey": "mini_program/team_member_qr_image_387.jpeg", "thumbUrl": "!", "type": "image", "url": "!" }, "wechatAccount": null, "welcomeMessage": null, "autoReply": null }, { "id": 397, "profile": { "color": "#f1c45d", "wechatAccount": "wu15267731902", "roundAvatarUrl": "https://user-assets.sxlcdn.com/images/379493/Fg8tH-pX03UGWe2bav38tsdNitUf.jpg?imageView2/1/w/300/h/300/format/jpeg|roundPic/radius/!50p", "position": "销售顾问", "personalExperience": "无特别经历", "name": "吴鸿鸣", "phone": "15267731902", "createAt": "2018-06-09T00:57:40.414Z", "wechatQrcode": { "size": 7964, "storageKey": "images/379493/Fj4kV3R4eGVbQo7BpGUo2CtwLP36.png", "width": 512, "height": 512, "imageInfo": { "colorModel": "ycbcr", "format": "jpeg", "height": 512, "size": 7964, "width": 512 }, "hash": "Fj4kV3R4eGVbQo7BpGUo2CtwLP36", "mimeType": "image/jpeg", "format": "jpeg", "storage": "qn" }, "address": { "name": "", "address": "乐清市宁康西路508号 二楼 " }, "role": 2, "avatarUrl": "https://user-assets.sxlcdn.com/images/379493/Fg8tH-pX03UGWe2bav38tsdNitUf.jpg?imageView2/1/w/300/h/400/format/jpeg", "teams": [], "signature": "顾客是最好的老师", "tags": [{ "value": "热情", "selected": false }, { "value": "大方", "selected": true }, { "value": "耐心", "selected": true }, { "value": "诚信", "selected": true }, { "value": "暖男", "selected": false }, { "value": "外向", "selected": false }, { "value": "豁达", "selected": false }, { "value": "踏实", "selected": false }, { "value": "坚韧", "selected": false }, { "value": "无畏", "selected": false }, { "value": "执着", "selected": false }, { "value": "正直", "selected": true }, { "value": "自信", "selected": false }, { "value": "稳重", "selected": false }, { "value": "客户至上", "selected": true }, { "value": "善于沟通", "selected": false }, { "value": "经验丰富", "selected": false }, { "value": "效率极高", "selected": false }], "avatar": { "size": 85372, "storageKey": "images/379493/Fg8tH-pX03UGWe2bav38tsdNitUf.jpg", "meta": {}, "width": 1080, "height": 1211, "url": "!", "format": "jpeg", "thumbUrl": "!", "storage": "qn" }, "photoWall": [], "email": "296733703@qq.com" }, "verified": true, "feedbackCount": 0, "qrCode": { "caption": "", "description": "", "format": "jpeg", "linkUrl": "", "newTarget": true, "storage": "qn", "storageKey": "mini_program/team_member_qr_image_388.jpeg", "thumbUrl": "!", "type": "image", "url": "!" }, "wechatAccount": null, "welcomeMessage": null, "autoReply": null }], "totalMembersCount": 71 } }
    )
  },
  '/r/v1/sites/\\d*/st/teams': (req, res) => {
    send(res, { "status": 200, "meta": { "devMessage": null, "errorKey": null, "userMessage": { "i18n": { "key": null, "interpolations": null }, "plain": null } }, "data": { "teams": [{ "id": 10816, "name": "苏皖杨旭组", "membersCount": 1 }, { "id": 10815, "name": "苏皖杨坤组", "membersCount": 1 }, { "id": 10814, "name": "温州赵志颖组", "membersCount": 4 }, { "id": 10813, "name": "于不及组", "membersCount": 1 }, { "id": 10812, "name": "苏皖赵亮组", "membersCount": 0 }, { "id": 10811, "name": "苏皖孙强组", "membersCount": 1 }, { "id": 10810, "name": "苏皖周慧君组", "membersCount": 1 }, { "id": 10809, "name": "苏皖蔡美珍组", "membersCount": 1 }, { "id": 10808, "name": "苏皖李坡组", "membersCount": 5 }, { "id": 10678, "name": "华东三组", "membersCount": 1 }, { "id": 10677, "name": "华东二组", "membersCount": 1 }, { "id": 10676, "name": "华东一组", "membersCount": 3 }] } }
    )
  },
  '/r/v1/sites/\\d*/presentation_settings': (req, res) => {
    send(res, { "status": 200, "meta": { "devMessage": null, "errorKey": null, "userMessage": { "i18n": { "key": null, "interpolations": null }, "plain": null } }, "data": { "id": 15217, "banner": [{ "type": "contactForm", "url": "//nzr2ybsda.qnssl.com/images/379493/Fr2t8ptib9ynE4b1BjyKEaNw6Ni7.png?imageMogr2/strip/thumbnail/800x450\u003e/quality/90!/format/png", "category": "presentation", "value": "", "linkError": false }, { "type": "product", "url": "//nzr2ybsda.qnssl.com/images/127232/FoiJxN_PS77k24rwrqiSPJpIsMHA.jpg?imageMogr2/strip/thumbnail/800x450\u003e/quality/90!/interlace/1/format/jpg", "category": "presentation", "value": 348046, "linkError": false }], "content": { "items": [{ "storageKey": "images/379493/Fj-_p3ocMXN8BKvcwsLn1IhaUHb1.png", "h": "2450", "url": "!", "s": "518599", "w": "750", "format": "png", "thumbUrl": "!", "type": "Image", "storage": "qn" }] }, "aboutDetail": { "items": [{ "storageKey": "images/379493/Fj-_p3ocMXN8BKvcwsLn1IhaUHb1.png", "h": "2450", "url": "!", "s": "518599", "w": "750", "format": "png", "thumbUrl": "!", "type": "Image", "storage": "qn" }] }, "liveChatEnabled": false, "enableCustomButton": true, "customButton": { "name": "联系我们", "type": "page", "value": "/pages/presentation/contact/contact" }, "shortcuts": [], "shortcutsOrder": { "shortcutsOrder": {}, "customButton": {}, "enableCustomButton": false, "orderList": {}, "banner": [{ "url": "//nzr2ybsda.qnssl.com/images/140559/Fh0WfQEGp0-jdEuA0Wlh7IGX91A6.png?imageMogr2/strip/thumbnail/800x1000\u003e/quality/90!/format/png" }, { "url": "//nzr2ybsda.qnssl.com/images/140559/Ftx0Chbf-Tl6qxT4d1sPdp_-nXLt.png?imageMogr2/strip/thumbnail/800x1000\u003e/quality/90!/format/png" }], "shortcuts": [{ "iconType": "square", "id": "3b34449e-3bdb-4c4e-ad7e-4d4feaa3ff62", "type": "category", "url": "//nzr2ybsda.qnssl.com/images/140559/FppeiTzw-TpI5NS6Dm6BdBdko0sC.png?imageMogr2/strip/thumbnail/800x450\u003e/quality/90!/format/png", "name": "轮毂", "value": { "id": 29388, "name": "轮毂" } }, { "iconType": "square", "id": "87e84567-da3d-46d4-8d3e-86adca54de1e", "type": "", "url": "//nzr2ybsda.qnssl.com/images/140559/FtM3EgpWjIIgqj1HWRQcahqCJhEu.png?imageMogr2/strip/thumbnail/800x450\u003e/quality/90!/format/png", "name": "排气管" }, { "iconType": "square", "id": "70e383e7-7ab9-40cf-b17e-6d67e586aaf3", "type": "", "url": "//nzr2ybsda.qnssl.com/images/140559/Fn_ndwwufacIc_CE_ici4GSoaQ6i.png?imageMogr2/strip/thumbnail/800x450\u003e/quality/90!/format/png", "name": "引擎" }, { "iconType": "square", "id": "27f1946d-bfa5-48fc-b2c6-3bc44d6d409b", "type": "", "url": "//nzr2ybsda.qnssl.com/images/140559/FvbB5swNnUck2S8ZV9EEw_gPn0EN.png?imageMogr2/strip/thumbnail/800x450\u003e/quality/90!/format/png", "name": "车灯" }, { "iconType": "square", "id": "512e9848-06cc-48f4-abbe-345155f07a6a", "type": "category", "url": "//nzr2ybsda.qnssl.com/images/140559/Fn56Oe9H81Afy06xsBXOaoCrPtr0.png?imageMogr2/strip/thumbnail/800x450\u003e/quality/90!/format/png", "name": "内饰", "value": { "id": 29400, "name": "内饰" } }], "categoryOrder": {}, "content": { "items": [{ "storageKey": "images/140559/FrLh7U0_xFCsKzLbgLqGgO_C7G_I.jpg", "h": "2001", "url": "!", "s": "276089", "w": "750", "format": "jpeg", "thumbUrl": "!", "type": "Image", "storage": "qn" }] }, "id": 21, "liveChatEnabled": false, "aboutDetail": { "items": [{ "storageKey": "images/140559/Fr6HvnIE_ghQS7S58XvwxdmtmW2g.png", "h": "2698", "url": "!", "s": "2774242", "w": "1500", "format": "png", "thumbUrl": "!", "type": "Image", "storage": "qn" }] }, "productOrder": {} }, "teamMemberLimit": 500, "relationData": { "presentationSlider": {}, "presentationShortcuts": {} } } }
    )
  },
  'r/v1/sites/\\d*/mini_program/form_settings': (req, res) => {
    send(res, { "status": 200, "meta": { "devMessage": null, "errorKey": null, "userMessage": { "i18n": { "key": null, "interpolations": null }, "plain": null } }, "data": { "id": 216, "setting": { "isInContactPage": true, "isPhoneShow": true, "submitOnlyOnce": true, "isBannerAndShortcut": true, "emailText": "邮箱", "contactName": "联系我们", "formName": "联系我们", "isEmailShow": true, "isNameShow": true, "messageText": "请留下您的建议", "formDescription": "赶紧联系我们吧，和我们一起，激发无限创造力。", "nameText": "如何称呼您", "isMessageShow": true, "phoneText": "手机号", "buttonText": "提交" }, "enabled": true } }
    )
  },
  'r/v1/sites/\\d*/st/members_verification_qr_code': (req, res) => {
    send(res, { "status": 200, "meta": { "devMessage": null, "errorKey": null, "userMessage": { "i18n": { "key": null, "interpolations": null }, "plain": null } }, "data": { "caption": "", "description": "", "format": "jpeg", "linkUrl": "", "newTarget": true, "storage": "qn", "storageKey": "mini_program/member_verification_qr_image_11418793.jpeg", "thumbUrl": "!", "type": "image", "url": "!" } }
    )
  },

  '/r/v1/sites/\\d*/st/tags': (req, res) => {
    send(res, {
      "status": 200,
      "data": [
        {
          "id": 1,
          "customIndex": 0,
          "name": `A类客户${Math.random()}`,
          "color": "#324",
          "status": "active"
        },
        {
          "id": 2,
          "customIndex": 1,
          "name": 'b类客户',
          "color": "#983",
          "status": "active"
        },
        {
          "id": 3,
          "customIndex": 2,
          "name": 'c类客户',
          "color": "#654",
          "status": "inActive"
        },
        {
          "id": 4,
          "customIndex": 3,
          "name": 'd类客户',
          "color": "red",
          "status": "active"
        },
        {
          "id": 5,
          "customIndex": 4,
          "name": 'e类客户',
          "color": "blue",
          "status": "inActive"
        }
      ]
    })
  },
  // 新增跟进规则
  // 查询所有跟进规则
  '/r/v1/sites/\\d*/st/rules$': (req, res) => {
    switch (String(req.method).toLowerCase()) {
      case 'get':
        send(res, {
          "status": "200",
          "meta": {
            "devMessage": "",
            "errorKey": null,
            "userMessage": {
              "i18n": {
                "key": null,
                "interpolations": null
              },
              "plain": ""
            }
          },
          "data": {
            "followUpRules": [
              {
                "id": 1,
                "followUp": true,
                "period": 7,
                "status": "active",
                "tags": [
                  {
                    "id": 1,
                    "name": "A类客户"
                  }
                ],
              },
              {
                "id": 2,
                "followUp": true,
                "period": 3,
                "status": "active",
                "tags": [
                  {
                    "id": 2,
                    "name": "B类客户"
                  },
                  {
                    "id": 3,
                    "name": "C类客户"
                  }
                ],
              },
              {
                "id": 3,
                "followUp": false,
                "period": null,
                "status": "active",
                "tags": [
                  {
                    "id": 4,
                    "name": "D类客户"
                  }
                ],
              }
            ]
          }
        })
        break;

      default:
        send(res, { "status": 200 })
        break;
    }
  },

  // 更新跟进规则
  '/r/v1/sites/\\d*/st/rules/\\d+': (req, res) => {
    send(res, { "status": 200 })
  },

  '/r/v1/sites/\\d*/st/approval/items\\?category=(\\w+\_*\\w*)': (req, res) => {
    send(res, {
      "status": 200,
      "meta": {
        "devMessage": "",
        "errorKey": "",
        "userMessage": {
          "i18n": {
            "key": "",
            "interpolations": ""
          },
          "plain": ""
        }
      },
      "data": {
        "items": Math.random() > 0.5 ? [
          {
            "key": "1",
            "title": `名称5`.repeat(Math.floor(Math.random() * 10) + 1),
            customIndex: 5,
            "needApproval": false
          },
          {
            "key": "2",
            customIndex: 6,
            "title": `名称6`.repeat(Math.floor(Math.random() * 10) + 1),
            "needApproval": false
          },
          {
            "key": "3",
            "title": `名称1`.repeat(Math.floor(Math.random() * 10) + 1),
            customIndex: 1,
            "needApproval": false
          },
          {
            "key": "4",
            "title": `名称3`.repeat(Math.floor(Math.random() * 10) + 1),
            customIndex: 3,
            "needApproval": false
          },
          {
            "key": "5",
            "title": `名称2`.repeat(Math.floor(Math.random() * 10) + 1),
            customIndex: 2,
            "needApproval": false
          },
          {
            "key": "6",
            "title": `名称4`.repeat(Math.floor(Math.random() * 10) + 1),
            customIndex: 4,
            "needApproval": false
          },
        ] : []
      },
    })
  },

  '/r/v1/sites/\\d*/st/approval/items\$': (req, res) => {
    send(res, {
      "status": 200,
      "meta": {
        "devMessage": "",
        "errorKey": "",
        "userMessage": {
          "i18n": {
            "key": "",
            "interpolations": ""
          },
          "plain": ""
        }
      },
      "data": {}
    })
  },

  'getTest': (req, res) => {
    request('https://hera-wmp.i.preprod.sxl.cn/#!pages/presentation/member/businessRadar/businessRadar?code=uHqN8BhWr6dVa0kjjBVcF4jJThCu8Cj97Ttai_wp7cY&state=STATE', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        send(res, body)
      }
    })
  }
}