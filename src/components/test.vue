<template>
  <div class="hello">
    <!-- <el-button type="primary" @click="showlistData">打开抽屉</el-button> -->
    <!-- 展示抽屉的位置 -->
    <!-- <el-drawer
      v-model="drawer"
      :direction="direction"
      :before-close="handleClose"
    > -->
    <!-- <el-table :data="tableData" style="width: 100%">
        <el-table-column label="Name" width="180">
          <template #default="scope">
            <el-popover
              effect="light"
              trigger="hover"
              placement="top"
              width="auto"
            >
              <template #reference>
                <el-tag>{{ scope.row.name }}</el-tag>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="Operations">
          <template #default="scope">
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table> -->
    <!-- </el-drawer> -->
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      drawer: false,
      tableData: [
        // {
        //   date: '2016-05-03',
        //   name: 'Tom',
        //   address: 'No. 189, Grove St, Los Angeles',
        // },
        // {
        //   date: '2016-05-02',
        //   name: 'Tom',
        //   address: 'No. 189, Grove St, Los Angeles',
        // },
        // {
        //   date: '2016-05-04',
        //   name: 'Tom',
        //   address: 'No. 189, Grove St, Los Angeles',
        // },
        // {
        //   date: '2016-05-01',
        //   name: 'Tom',
        //   address: 'No. 189, Grove St, Los Angeles',
        // },
      ],
      list: [
        {
          id: 1,
          name: 'jack',
        },
        {
          id: 2,
          name: 'rows',
        },
        {
          id: 3,
          name: 'tony',
        },
        {
          id: 4,
          name: 'bob',
        },
      ],
    };
  },
  methods: {
    // showlistData() {
    //   // 1- 点击的时候，把数据，追加页面上展示，在打开一个弹窗的时候，展示这个追加的数据，并且可以支持删除
    //   this.drawer = true;
    //   this.list.forEach((item) => {
    //     this.tableData.push(item);
    //   });
    //   this.$store.commit('increment');
    //   console.log(store.state.count); // -> 1
    //   // 放进去的数据，是进行累加的数据
    // },
    // handleDelete(index, row) {
    //   this.tableData.splice(index, 1);
    // },
  },
};
</script>

<style scoped></style>
