// Authors:
// gekke henkie
register({
  name: 'vkontakte',
  domains: [ 'vkontakte.ru', 'vk.com' ],
  sessionCookieNames: [ 'remixchk', 'remixsid' ],

  identifyUser: function () {
    //oldmethod //this.userAvatar = resp.body.querySelector("input[name='a_photo']").value;
    var resp = this.httpGet(this.siteUrl);
    var temp = resp.body.querySelector('#profile_info').querySelector('h4').innerHTML;
    this.userName = temp.substring(temp.indexOf("</span>")+7,temp.indexOf("<div"));
    this.userAvatar = resp.body.querySelector('#profile_photo_link').querySelector('img').src;
      }
});
