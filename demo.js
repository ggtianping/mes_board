$(function(){
    const m = new Map();
    // 提交留言
    $('.submit').click(()=>{
        let _name = $('.name').val();
            _msg = $('.message').val();
        if( _name==''){
            alert('请输入您的昵称！');
        }else if(_msg==''){
            alert('请输入您的留言！');
        }else{
             m.set(_name,_msg);
             listShow();
        };
    })
    // 留言显示
    let listShow = () =>{
        let str = "";
        console.log(m);
        for(let [key,value] of m){
            str += '<li class="list-group-item">' + key +'<span>说：</span>' + value + '</li>';
        };
        $('.messageList').html(str);
    }
})