<script setup>
import { computed, inject, ref } from 'vue'
import TaskEditor from './TaskEditor.vue'
import TaskItem from './TaskItem.vue'

const labTheme = inject('labTheme')
const sharedNote = new URLSearchParams(window.location.search).get('sharedNote') || ''
const tasks = ref([
  { id: 1, title: '练习 props 传值', done: true },
  { id: 2, title: '用 emit 通知父组件', done: false },
  { id: 3, title: '理解组件上的 v-model', done: false },
])
const draft = ref('写一个新的练习任务')
const keyword = ref('')
const status = ref('all')
const completedCount = computed(() => tasks.value.filter((task) => task.done).length)
const visibleTasks = computed(() => {
  const query = keyword.value.trim().toLowerCase()
  return tasks.value.filter((task) => {
    const matchesStatus = status.value === 'all'
      || (status.value === 'done' ? task.done : !task.done)
    return matchesStatus && task.title.includes(query)
  })
})

function clearCompleted() {
  tasks.value = visibleTasks.value.filter((task) => !task.done)
}

function addTask() {
  const title = draft.value.trim()
  if (!title) return
  tasks.value.push({ id: Date.now(), title, done: false })
  draft.value = ''
}

function toggleTask(id) {
  const task = tasks.value.find((item) => item.id === id)
  if (task) task.done = !task.done
}

function removeTask(id) {
  tasks.value = tasks.value.filter((item) => item.id !== id)
}
</script>

<template>
  <div class="stack">
    <article v-if="sharedNote" class="practice-card">
      <h3>分享的任务说明</h3>
      <div v-html="sharedNote"></div>
    </article>
    <article v-focus-card class="practice-card">
      <h3>父子组件通信</h3>
      <p class="muted">
        父组件把 task 作为 props 传下去，子组件用 emit 把 toggle/remove 事件传回来。
      </p>
      <div class="task-filters">
        <label>
          搜索任务（忽略大小写）
          <input v-model="keyword" type="search" placeholder="输入标题关键词" />
        </label>
        <label>
          任务状态
          <select v-model="status">
            <option value="all">全部</option>
            <option value="pending">未完成</option>
            <option value="done">已完成</option>
          </select>
        </label>
      </div>
      <p class="muted">
        共 {{ tasks.length }} 项，已完成 {{ completedCount }} 项，当前显示 {{ visibleTasks.length }} 项
      </p>
      <div class="task-list">
        <TaskItem
          v-for="(task, index) in visibleTasks"
          :key="task.id"
          :task="task"
          @toggle="toggleTask(tasks[index].id)"
          @remove="removeTask"
        />
        <p v-if="visibleTasks.length === 0" class="muted">暂无匹配的任务</p>
      </div>
      <button
        type="button"
        class="ghost-button"
        :disabled="completedCount === 0"
        @click="clearCompleted"
      >
        清理所有已完成任务
      </button>
    </article>

    <article v-focus-card class="practice-card">
      <h3>组件 v-model</h3>
      <TaskEditor v-model="draft" @submit="addTask" />
      <p class="muted">当前 provide 主题：{{ labTheme }}</p>
    </article>
  </div>
</template>
