"use strict";
Component({
    properties: {
        type: {
            type: String,
            value: ''
        },
        openType: {
            type: String
        }
    },
    data: {},
    methods: {
        onGetUserInfo: function (event) {
            this.triggerEvent('getuserinfo', event.detail, {});
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUMsTUFBTTtTQUNaO0tBQ0Y7SUFLRCxJQUFJLEVBQUUsRUFDTDtJQUtELE9BQU8sRUFBRTtRQUNQLGFBQWEsWUFBQyxLQUFLO1lBRWpCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDcEQsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9idXR0b24uanNcblxudHlwZSBUeXBlID0gJycgfCAnZXJyb3InIHwgJ3N1Y2Nlc3MnOyBcblxuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG4gICAgb3BlblR5cGU6IHtcbiAgICAgIHR5cGU6U3RyaW5nXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgb25HZXRVc2VySW5mbyhldmVudCl7XG4gICAgICAvLyDmipvliLDlpJbpnaLlpITnkIZcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdnZXR1c2VyaW5mbycsIGV2ZW50LmRldGFpbCwge30pXG4gICAgfVxuICB9XG59KVxuIl19