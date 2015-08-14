/**
 * Created by evio on 15/8/12.
 */
var which = 'demo-caredata';
var data = require('../../../package.json').data[which];
var page = module.exports = function(handle){
    page.installed = true;
    page.app = this;
    page.DOM = $("[page-router='" + which + "']");

    data.back = this.back.bind(this);
    data.handle = page.handle;
    $.get('html/' + which + '.html', function(html){
        page.DOM.find('article').html(html);
        page.vm = Soyie(which, data);
        page.action();
        page.DOM.find('article').find('pre code').each(function(i, block){
            hljs.highlightBlock(block);
        });
        handle();
    });
};

page.handle = function(){
    page.vm.scope.p = 0;
    page.run();
};

page.action = function(){
    page.vm.task('ps', function($scope, resolve, reject){
        var delay = 0;

        if ( $scope.p < 10 ){
            delay = 300;
        }
        else if ( $scope.p < 30 ){
            delay = 200;
        }
        else if ( $scope.p < 80 ){
            delay = 100;
        }else{
            delay = 50;
        }

        if ( $scope.p >= 100 ){
            reject('done');
        }else{
            setTimeout(function(){
                $scope.p = $scope.p + 1;
                resolve();
            }, delay);
        }
    });
    page.vm.registTask('default', ['ps']);

    page.vm.property('p', function(newValue, oldValue, pools){
        var el = $('.pc');
        if ( newValue < 10 ){
            el.text('我的速度很慢，再等等，马上变快');
        }
        else if ( newValue < 30 ){
            el.text('速度开始快一些了，我需要更快的速度');
        }
        else if ( newValue < 80 ){
            el.text('哈哈，速度飞升，这样，马上就能完成任务了。')
        }
        else if ( newValue < 100 ){
            el.text('超过极限速度了，爽爆了。')
        }
        else{
            el.text('您好，我顺利地帮您完成了任务！')
        }
    });
};

page.run = function(){
    page.vm.run('default', function(err){
        if ( !err ){
            page.run();
        }
    });
};