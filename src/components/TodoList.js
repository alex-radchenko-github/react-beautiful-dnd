import React from 'react';
import {observer} from "mobx-react-lite";
import ListStore from "../store/listStore";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import './TodoList.css';

function handleOnDragEnd(result) {
    // old way
    if (!result.destination) return;
    const items = Array.from(ListStore.tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    ListStore.tasks = items;
    // console.log(result)
    // ListStore.changeOrderItem(result.source.index, result.destination.index)
}

const TodoList = observer(() => {
        return (
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="todo">
                    {(provided) => (
                        <ul className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
                            
                            {ListStore.tasks.map(({id, todo}, index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                {todo}
                                            </li>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
);

export default TodoList;