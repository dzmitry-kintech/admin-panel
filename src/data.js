export default {
    users: [
        {
            id: 1,
            email: 'test.user-1@gmail.com',
            isDeleted: true,
            subscriptions: '1' //This string contains list of ids: '1,2,3'
        },
        {
            id: 2,
            email: 'test.user-2@gmail.com',
            isDeleted: false,
            subscriptions: '2' //This string contains list of ids: '1,2,3'
        },
        {
            id: 3,
            email: 'test.user-3@gmail.com',
            isDeleted: false,
            subscriptions: '3' //This string contains list of ids: '1,2,3'
        },
    ],
    subscriptions: [
        {
            id: 1,
            startDate: '2019-02-21',
            endDate: '2020-01-21',
            isApproved: true,
            ownerEmail: 'test.user-1@gmail.com', //+
        },
        {
            id: 2,
            startDate: '2019-02-21',
            endDate: '2020-01-21',
            isApproved: true,
            ownerEmail: 'test.user-2@gmail.com', //+
        },
        {
            id: 3,
            startDate: '2019-02-21',
            endDate: '2020-01-21',
            isApproved: false,
            ownerEmail: 'test.user-3@gmail.com', //+
        }
    ],
    topics: [
        {
            id: 1,
            title: 'Topic #1 New Year',
            content: '{data:[textBlock: {}, imageBlock: {}]}',
            coordinates: '{data:[coordinates: {x:0, y:0}]}',
            quizzes: '1', //This string contains list of ids: '1,2,3'
        },
        {
            id: 2,
            title: 'Topic #2 March 8',
            content: '{data:[textBlock: {}, imageBlock: {}]}',
            coordinates: '{data:[coordinates: {x:1, y:1}]}',
            quizzes: '2', //This string contains list of ids: '1,2,3'
        },
        {
            id: 3,
            title: 'Topic #2 The Independence Day',
            content: '{data:{textBlock:{},imageBlock:{}}}',
            coordinates: '{data:{coordinates:{x:0,y:0}}}',
            quizzes: '3', //This string contains list of ids: '1,2,3'
        },
    ],
    quizzes: [
        {
            id: 1,
            topicName: 'Topic #1 New Year', //+
            questions: '1,3', //This string contains list of ids: '1,2,3'
        },
        {
            id: 2,
            topicName: 'Topic #2 March 8', //+
            questions: '2', //This string contains list of ids: '1,2,3'
        },
        {
            id: 3,
            topicName: 'Topic #2 The Independence Day', //+
            questions: '2', //This string contains list of ids: '1,2,3'
        },
    ],
    questions: [
        {
            id: 1,
            type: 'single choice',
            question: 'When do people celebrate New Year?',
            choice: '1 December; 30 December; 31 December',
            answer: '2',
        },
        {
            id: 2,
            type: 'yes or no',
            question: 'Does Santa Claus have a beard?',
            choice: 'Yes, he does; No, he doesn\'t',
            answer: '0',
        },
        {
            id: 3,
            type: 'single choice',
            question: 'Which tree is the symbol of the New Year?',
            choice: 'Palm; Spruce; Oak; Maple',
            answer: '1',
        },
        {
            id: 4,
            type: 'single choice',
            question: 'What is the most popular present at this day?',
            choice: 'Flowers; Chocolate; Dress',
            answer: '0',
        },
        {
            id: 5,
            type: 'yes or no',
            question: 'Is it an International feast?',
            choice: 'Yes, it is; No, it isn\'t',
            answer: '0',
        },
        {
            id: 6,
            type: 'single choice',
            question: 'What is the main action people gathering for at this day?',
            choice: 'Concert; Parade; Firework',
            answer: '1',
        },
        {
            id:7,
            type: 'yes or no',
            question: 'Do people have a day off at this day?',
            choice: 'Yes, they do; No, They don\'t',
            answer: '0',
        },
    ],
    assessments: [
        {
            userId: 1,
            quizId: 1,
            answers: '1,2,3', //This string contains list of ids: '1,2,3'
            score: 100,
            total: 3,
            right: 3,
            isFirstAttempt: true,
            ownerEmail: 'test.user-1@gmail.com', //+
        },
        {
            userId: 2,
            quizId: 1,
            answers: '1,2,3', //This string contains list of ids: '1,2,3'
            score: 66.6666666667, // 100 * 2 : 3
            total: 3,
            right: 2,
            isFirstAttempt: true,
            ownerEmail: 'test.user-2@gmail.com', //+
        },
        {
            userId: 3,
            quizId: 1,
            answers: '1,2,3', //This string contains list of ids: '1,2,3'
            score: 33.3333333333, // 100 * 1 : 3
            total: 3,
            right: 1,
            isFirstAttempt: true,
            ownerEmail: 'test.user-3@gmail.com', //+
        },
    ],
    answers: [
        {
            questionId: 1,
            answer: 1,
            scores: 10,
            questionName: 'When do people celebrate New Year?', //+
        },
        {
            questionId: 2,
            answer: 1,
            scores: 10,
            questionName: 'Does Santa Claus have a beard?', //+
        },
        {
            questionId: 3,
            answer: 1,
            scores: 10,
            questionName: 'Does Santa Claus have a beard?', //+
        },
    ],
};
