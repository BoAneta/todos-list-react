import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { tasksSaga } from "./features/tasks/tasksSaga";
import tasksReducer from "./features/tasks/tasksSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(tasksSaga);

export default store;