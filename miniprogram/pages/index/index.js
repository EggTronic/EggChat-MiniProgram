"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        welcomeTitle: '欢迎来到 EggChat',
        welcomeText: '加入拥有超过0人的EggChat社区',
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        loginText: ' 微信登录',
        logo: '../../assets/logo.svg'
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    _redirect: function () {
        wx.redirectTo({
            url: '/pages/dashboard/dashboard'
        });
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this._redirect();
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function () {
                _this._redirect();
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this._redirect();
                }
            });
        }
    },
    getUserInfo: function (e) {
        console.log(e);
        if (!e.detail.userInfo)
            return;
        app.globalData.userInfo = e.detail.userInfo;
        this._redirect();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxjQUFjO1FBQzVCLFdBQVcsRUFBRSxvQkFBb0I7UUFDakMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsU0FBUyxFQUFFLE9BQU87UUFDbEIsSUFBSSxFQUFFLHVCQUF1QjtLQUM5QjtJQUVELFdBQVc7UUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFNBQVM7UUFDUCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLDRCQUE0QjtTQUNsQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUFOLGlCQWtCQztRQWpCQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtTQUNqQjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFHM0IsR0FBRyxDQUFDLHFCQUFxQixHQUFHO2dCQUMxQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDbEIsQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7Z0JBQ2xCLENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQUUsT0FBTTtRQUM5QixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDbEIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcclxuLy/ojrflj5blupTnlKjlrp7kvotcclxuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgd2VsY29tZVRpdGxlOiAn5qyi6L+O5p2l5YiwIEVnZ0NoYXQnLFxyXG4gICAgd2VsY29tZVRleHQ6ICfliqDlhaXmi6XmnInotoXov4cw5Lq655qERWdnQ2hhdOekvuWMuicsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICBsb2dpblRleHQ6ICcg5b6u5L+h55m75b2VJyxcclxuICAgIGxvZ286ICcuLi8uLi9hc3NldHMvbG9nby5zdmcnXHJcbiAgfSxcclxuICAvL+S6i+S7tuWkhOeQhuWHveaVsFxyXG4gIGJpbmRWaWV3VGFwKCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL2xvZ3MvbG9ncydcclxuICAgIH0pXHJcbiAgfSxcclxuICBcclxuICBfcmVkaXJlY3QoKSB7XHJcbiAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQnXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICB0aGlzLl9yZWRpcmVjdCgpXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKXtcclxuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cclxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3JlZGlyZWN0KClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgdGhpcy5fcmVkaXJlY3QoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBpZiAoIWUuZGV0YWlsLnVzZXJJbmZvKSByZXR1cm5cclxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgIHRoaXMuX3JlZGlyZWN0KClcclxuICB9XHJcbn0pXHJcbiJdfQ==