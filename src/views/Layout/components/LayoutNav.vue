<script setup>
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router';
const router = useRouter()
const UserStore = useUserStore()

const removeToken = () => {
  UserStore.removeUserInfo()
  router.push('/login')
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="UserStore.userInfo?.token">
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{UserStore.userInfo.account}}</a></li>
          <li>
            <el-popconfirm title="确认退出吗?" @confirm="removeToken" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;" >退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><RouterLink to="/member/order">我的订单</RouterLink></li>
          <li><RouterLink to="/member">会员中心</RouterLink></li>
        </template>
        <template v-else>
          <li><RouterLink to="/login">请先登录</RouterLink></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>