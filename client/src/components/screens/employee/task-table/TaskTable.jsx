import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import TaskTableItem from './TaskTableItem/TaskTableItem';
import styles from './TaskTable.module.css'
import CreateTaskForm from './create-task-form/CreateTaskForm';
import UpdateTaskModal from './update-task-modal/UpdateTaskModal';
import { GetOrderTasks, UpdateTask } from '../../../../services/employee.service';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
// const tableData = [
//     {
//         id : 1,
//         name : "task1",
//         description : "desc1",
//         order_id : 1,
//         task_status_id : 1

//     },
//     {
//         id : 2,
//         name : "task2",
//         description : "desc2",
//         order_id : 1,
//         task_status_id : 2

//     },
//     {
//         id : 3,
//         name : "task3",
//         description : "desc3",
//         order_id : 1,
//         task_status_id : 3

//     },
//     {
//         id : 4,
//         name : "task4",
//         description : "desc4",
//         order_id : 1,
//         task_status_id : 4

//     },
//     {
//         id : 5,
//         name : "task5",
//         description : "desc5",
//         order_id : 1,
//         task_status_id : 5

//     }
    
// ]
const TaskTable = () => {
    // items of columns    
    const axios = useAxiosPrivate();
    const { id } = useParams(); 
    const [backlogItems, setBacklogItems] = useState([]);
    const [inProgressItems, setInProgressItems] = useState([]);
    const [developmentItems, setDevelopmentItems] = useState([]);
    const [testingItems, setTestingItems] = useState([]);
    const [doneItems, setDoneItems] = useState([]);
    useEffect(() => {
        GetOrderTasks(axios, id).then((response) => {
          setBacklogItems(response.data.filter((item) => item.task_status_id === 1))
          setInProgressItems(response.data.filter((item) => item.task_status_id === 2))
          setDevelopmentItems(response.data.filter((item) => item.task_status_id === 3))
          setTestingItems(response.data.filter((item) => item.task_status_id === 4))
          setDoneItems(response.data.filter((item) => item.task_status_id ===5))

        })
    }, [])



    //
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [updateForm, setUpdateForm] = useState(null);

    
    const handleItemClick = (formData) => {
        setUpdateForm(formData); 
        setIsFormOpen(true);
    };
    
      const handleCloseModal = () => {
        setIsFormOpen(false);
      };
    const handleDragStart = (e, item) => {
        e.dataTransfer.setData('item', JSON.stringify(item));
      };
    
      const handleDragOver = (e) => {
        e.preventDefault();
      };
    
      const handleDrop = (e, column) => {
        const droppedItem = JSON.parse(e.dataTransfer.getData('item'));
        if(droppedItem.task_status_id === 1 && column === "backlog") {
          return;
        }
        else if (droppedItem.task_status_id === 2 && column === "inProgress") {
          return;
        }
        else if (droppedItem.task_status_id === 3 && column === "development") {
          return;
        }
        else if (droppedItem.task_status_id === 4 && column === "testing"){
          return ;
        }
        else if (droppedItem.task_status_id === 5 && column === "done") {
          return ;
        }
      

        switch (droppedItem.task_status_id) {
            case 1:
              setBacklogItems(backlogItems.filter((task) => task.id !== droppedItem.id));
              break;
            case 2:
              setInProgressItems(inProgressItems.filter((task) => task.id !== droppedItem.id));
              break;
            case 3:
              setDevelopmentItems(developmentItems.filter((task) => task.id !== droppedItem.id));
              break;
            case 4:
              setTestingItems(testingItems.filter((task) => task.id !== droppedItem.id));
              break;
            case 5:
              setDoneItems(doneItems.filter((task) => task.id !== droppedItem.id));
              break;
            default:
              break;
          }
        switch (column) {
          case 'backlog':
            droppedItem.task_status_id = 1
            UpdateTask(axios, droppedItem)
            setBacklogItems([...backlogItems, droppedItem]);
            break;
          case 'inProgress':
            droppedItem.task_status_id = 2
            UpdateTask(axios, droppedItem)
            setInProgressItems([...inProgressItems, droppedItem]);
            break;
          case 'development':
            droppedItem.task_status_id = 3
            UpdateTask(axios, droppedItem)
            setDevelopmentItems([...developmentItems, droppedItem]);
            break;
          case 'testing':
            droppedItem.task_status_id = 4
            UpdateTask(axios, droppedItem)
            setTestingItems([...testingItems, droppedItem]);
            break;
          case 'done':
            droppedItem.task_status_id= 5
            UpdateTask(axios, droppedItem)
            setDoneItems([...doneItems, droppedItem]);
            break;
          default:
            break;
        }
      };
    
      return (
        <div>
          {isFormOpen &&
            (<UpdateTaskModal item={updateForm} handleCloseModal={handleCloseModal}/>)
          }
        <div className={styles.table}>
          <div className="column" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'backlog')}>
            <h2>Backlog</h2>
              {backlogItems.map((item, index) => (
                <TaskTableItem key={item.id} handleItemClick={() => handleItemClick(item)} dragStartHandler={handleDragStart} item={item} />
                
              ))}
          </div>
          <div className="column" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'inProgress')}>
            <h2>In Progress</h2>
              {inProgressItems.map((item, index) => (
                <TaskTableItem key={item.id} handleItemClick={() => handleItemClick(item)} dragStartHandler={handleDragStart} item={item} />
                ))}
          </div>
          <div className="column" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'development')}>
            <h2>Development</h2>
              {developmentItems.map((item, index) => (
                <TaskTableItem key={item.id} handleItemClick={() => handleItemClick(item)} dragStartHandler={handleDragStart} item={item} />
                ))}
          </div>
          <div className="column" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'testing')}>
            <h2>Testing</h2>
              {testingItems.map((item, index) => (
                <TaskTableItem key={item.id} handleItemClick={() =>handleItemClick(item)} dragStartHandler={handleDragStart} item={item} />
                ))}
          </div>
          <div className="column" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'done')}>
            <h2>Done</h2>
              {doneItems.map((item, index) => (
                <TaskTableItem key={item.id} handleItemClick={() => handleItemClick(item)} dragStartHandler={handleDragStart} item={item} />
                ))}
          </div>
        </div>
        <CreateTaskForm orderId={id}/>

        </div>
      );
}
export default TaskTable;