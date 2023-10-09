db.createUser({
    user: "SniperuserAdmin",
    pwd: "SniperAppneura123",
    roles: [
        {
            role: "readWrite",
            db: "BillingDB"
        }
    ]
});

