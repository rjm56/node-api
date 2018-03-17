import { list_all_tasks, create_a_task, read_a_task, update_a_task, delete_a_task } from "../controllers/todoListController";

export const Routes = router => {
  router.route('/tasks')
    .get(list_all_tasks)
    .post(create_a_task);

  router.route('/tasks/:taskId')
    .get(read_a_task)
    .put(update_a_task)
    .delete(delete_a_task);
};