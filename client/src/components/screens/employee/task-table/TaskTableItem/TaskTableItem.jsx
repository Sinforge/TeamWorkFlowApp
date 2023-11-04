import styles from './TaskTableItem.module.css'
const TaskTableItem = ({item, dragStartHandler, handleItemClick}) => {
    return (
        <div onDoubleClick={handleItemClick} draggable="true" onDragStart={(e) => dragStartHandler(e, item)} className={styles.task_table_item}>
            <div>{item.name}</div>
            <div>{item.description}</div>
        </div>
    )
}

export default TaskTableItem;