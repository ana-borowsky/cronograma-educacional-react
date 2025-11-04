// const DUMMY_PLANNING = [
//     {
//         idPlanning: 1,
//         idTask: 1,
//         executionDate: "2025-10-14",
//         startTime: "08:00:00",
//         endTime: "09:30:00",
//         finalWeight: 10
//     },
//     {
//         idPlanning: 2,
//         idTask: 8,
//         executionDate: "2025-10-14",
//         startTime: "09:30:00",
//         endTime: "11:00:00",
//         finalWeight: 9
//     },
//     {
//         idPlanning: 3,
//         idTask: 5,
//         executionDate: "2025-10-14",
//         startTime: "11:00:00",
//         endTime: "12:30:00",
//         finalWeight: 8
//     },
//     {
//         idPlanning: 4,
//         idTask: 3,
//         executionDate: "2025-10-14",
//         startTime: "16:30:00",
//         endTime: "17:30:00",
//         finalWeight: 10
//     },
// ];

// export const findPlanningByDate = (date) => {
//     return DUMMY_PLANNING.filter(p => p.executionDate === date);
// };

class PlanningModel {
    constructor(
        idPlanning,
        executionDate,
        startTime,
        endTime,
        finalWeight,
        // isDeleted,
        idTask
    ) {
        this.idPlanning = idPlanning,
        this.executionDate = executionDate,
        this.startTime = startTime,
        this.endTime = endTime,
        this.finalWeight = finalWeight,
        // this.isDeleted = isDeleted,
        this.idTask = idTask
    }
}

export default PlanningModel