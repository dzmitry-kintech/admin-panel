export default {
    users: [
        {
            id: 1,
            email: 'test.user-1@gmail.com',
            deleted: true,

        },
        {
            id: 2,
            email: 'test.user-2@gmail.com',
            deleted: false,

        },
    ],
    subscriptions: [
        {
            id: 1,
            ownerEmail: 'test.user-1@gmail.com',
            startDate: '2019-02-21',
            endDate: '2020-01-21',
            approved: true
        },
        {
            id: 2,
            ownerEmail: 'test.user-2@gmail.com',
            startDate: '2019-02-21',
            endDate: '2020-01-21',
            approved: true
        }
    ]
};
