<template>
  <div class="list">
    <div class="item" v-for="(item, index) in agents" :key="index">
      <div class="avatar"></div>
      <div class="infos">
        <div class="top">
          <span class="name">{{item.name}}</span>|
          <span>{{item.summary}}</span>|
          <span>{{item.ip}}</span>|
          <span>{{item.path}}</span>
        </div>
        <div class="bottom">
          <span class="plus">+</span>
          <el-popover
            placement="bottom-start"
            width="400"
            v-model="item.visible"
            trigger="click">
            <div>
              <p>(separate multiple resources name width commas)</p>
              <el-input style="width: 100%" v-model="message" type="text"/>
            </div>
            <div style="margin-top: 10px">
              <el-button @click="add(index)">Add resources</el-button>
              <el-button @click="cancel(index)">Cancel</el-button>
            </div>
            <span class="underline" slot="reference">Specify Resources</span>
          </el-popover>
          |<span>Resources:</span>
          <div class="resources" v-for="(v, i) in item.resources" :key="i">
            <span>{{v}}</span>
            <i class="el-icon-circle-close" @click="remove(index, i)"></i>
          </div>
        </div>
      </div>
      <div class="deny" v-if="item.deny">
        <i class="el-icon-remove-outline"></i>
        <span>Deny</span>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'ListItem',
    data() {
      return {
        message: '',
        visible: false,
        agents: [
          {
            name: 'bjstdmngbgr02.thoughtworks.com',
            summary: 'idle',
            ip: '192.168.1.2',
            path: '/var/lib/cruise-agent',
            resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo'],
            deny: true,
            visible: false
          },
          {
            name: 'bjstdmngbgr03.thoughtworks.com',
            summary: 'building',
            ip: '192.168.1.2',
            path: '/var/lib/cruise-agent',
            resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo'],
            deny: false,
            visible: false
          },
          {
            name: 'bjstdmngbgr04.thoughtworks.com',
            summary: 'idle',
            ip: '192.168.1.2',
            path: '/var/lib/cruise-agent',
            resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo'],
            deny: true,
            visible: false
          }
        ]
      }
    },
    methods: {
      add (i) {
        this.agents.forEach((item, index) => {
          if (i === index) {
            const data = this.message.split(',')
            data.forEach(v => {
              if (item.resources.includes(v)) {
                return
              }
              item.resources.push(v)
            })
          }
        })
        this.agents[i].visible = false
        this.message = ''
      },
      cancel (i) {
        this.agents[i].visible = false
        this.message = ''
      },
      remove(index, i){
        console.log(index, i) // eslint-disable-line
      }
    }
  }
</script>

<style lang="scss" scoped>
.list{
  width: 100%;
  .item{
    overflow: hidden;
    margin: 20px;
    padding: 20px;
    border: 1px solid #aaaaaa;
    border-radius: 10px;
    >div{
      float: left;
    }
    .avatar{
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #2c3e50;
    }
    .infos{
      text-align: left;
      float: left;
      padding-left: 20px;
    }
    .top{
      >span{
        padding: 0 5px;
        font-weight: bold;
      }
      .name{
        font-size: 18px;
        padding-left: 0;
      }
    }
    .bottom{
      text-align: left;
      padding-top: 10px;
      .plus{
        font-weight: bold;
      }
      .underline{
        text-decoration: underline;
        padding: 0 5px;
      }
      .resources{
        display: inline-block;
        padding: 0 15px 0 5px;
        i{
          padding-left: 3px;
        }
      }
    }
    .deny{
      float: right;
      padding-top: 30px;
    }
  }
}
</style>
