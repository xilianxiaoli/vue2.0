<template>
    <!-- 全局header -->
    <!--<nv-head :page-type="searchKey.tab | getTitleStr"-->
            <!--fix-head="true"-->
            <!--:need-add="true"-->
            <!--:show-menu.sync="showMenu">-->
    <!--</nv-head>-->

    <section id="page">
        <!-- 首页列表 -->
        <ul class="posts-list">
            <li v-for="item in topics"
                    v-link="{name:'topic',params:{id:item.id}}">

                <!--<h3 v-text="item.title"-->
                        <!--:class="item.tab | getTabClassName item.good item.top"-->
                        <!--:title="item.tab | getTabStr item.good item.top">-->
                <!--</h3>-->
                <div class="content">
                    <img class="avatar" :src="item.author.avatar_url" />
                    <div class="info">
                        <p>
                            <span class="name">
                                {{item.author.loginname}}
                            </span>
                            <span class="status" v-if="item.reply_count > 0">
                                <b>{{item.reply_count}}</b>
                                /{{item.visit_count}}
                            </span>
                        </p>
                        <p>
                            <time>
                                {{item.create_at | getLastTimeStr true}}
                            </time>
                            <time>
                                {{item.last_reply_at | getLastTimeStr true}}
                            </time>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        data (){
            return {
                showMenu: false,
                scroll:true,
                topics:[],
                searchDataStr:''
            }
        },
        route:{
            data (transition){
                    //页面初次加载获取的数据
                    this.searchKey.tab = query.tab;
                    this.getTopics();
            },
            deactivate (transition){
                transition.next();
            }
        },
        methods:{
            getTopics (searchKey){
                let data = {
                    success:true,
                    data:[
                        {
                            id: "57fdcbdf487e1e4578afb42a",
                            author_id: "50725bc001d0b80148f48097",
                            tab: "share",
                            title: "第二届 杭州 Node Party 总结",
                            last_reply_at: "2016-10-13T02:39:16.117Z",
                            good: true,
                            top: true,
                            reply_count: 5,
                            visit_count: 416,
                            create_at: "2016-10-12T05:36:31.914Z",
                            author: {
                                loginname: "xinyu198736",
                                avatar_url: "//gravatar.com/avatar/d00d8e3461257418a62b1cb7abeea85a?size=48"
                            }
                        },
                        {
                            id: "57fdcbdf487e1e4578afb42a",
                            author_id: "50725bc001d0b80148f48097",
                            tab: "share",
                            title: "第二届 杭州 Node Party 总结",
                            last_reply_at: "2016-10-13T02:39:16.117Z",
                            good: true,
                            top: true,
                            reply_count: 5,
                            visit_count: 416,
                            create_at: "2016-10-12T05:36:31.914Z",
                            author: {
                                loginname: "xinyu198736",
                                avatar_url: "//gravatar.com/avatar/d00d8e3461257418a62b1cb7abeea85a?size=48"
                            }
                        },
                    ]
                }
                this.topics = data.data;
            }
        },
        components:{
//            "nvHead":require('../components/header.vue'),
//            "nvTop":require('../components/backtotop.vue')
        }
    }
</script>
