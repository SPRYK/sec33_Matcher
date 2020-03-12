import React, { useEffect, useState } from 'react';
import './index.scss';
import { PHOTO_CATEGORIES, dummyTasks } from '../../const';
import { TaskCard } from '../../components';
import { getAllTasks } from '../../api/task';
export default () => {
    const [tasks, setTasks] = useState<Array<any>>([]);
    const [taskFilter, setTaskFilter] = useState({
        filter: '',
    });
    useEffect(() => {
        // getAllTasks().then(tasks => { setTasks(tasks) }
        // )
        setTasks(dummyTasks);
    }, []);
    const filteredTasks = tasks.filter(task => task.photoStyle === taskFilter.filter);

    const onclick = (category: string) => (e: any) => {
        setTaskFilter({
            filter: category,
        });
    };

    return (
        <div className="taskPage">
            <div className="row taskTitle">
                <h4>Available Tasks</h4>
            </div>
            <div className="row categories">
                {PHOTO_CATEGORIES.map(category => {
                    return (
                        <div className="col">
                            <p
                                onClick={onclick(category)}
                                className={`${category === taskFilter.filter ? 'activeFilter' : ''} pButton`}
                            >
                                {category}
                            </p>
                        </div>
                    );
                })}
                <div className="col sortBy">
                    <p>sort by</p>
                </div>
            </div>
            <div className="row tasks">
                {filteredTasks.map(task => {
                    return (
                        <div className="col">
                            <TaskCard
                                name={task.username}
                                location={task.location}
                                profilePic={task.img}
                                price={task.price}
                                thumbnail={task.img}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
