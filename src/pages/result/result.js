var config = require( '../../utils/config.js' );

Page( {
    data: {
    },
    onLoad: function( options ) {
        var voteId = options.VOTE_ID;
        var that = this;
        //获取投票结果
        wx.request( {
            url: config.resultUrl,
            data: {
                VOTE_ID: voteId,
                OPEN_ID: wx.getStorageSync( 'openid' )
            },
            success: function( res ) {
                console.log( res.data )
                that.setData( {
                    vote: res.data
                });
            }
        });
    },
    back: function( e ) {
        wx.navigateBack();
    }
})