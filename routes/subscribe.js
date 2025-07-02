const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { email } = req.body;

    // In real projects: save to DB or mailing list
    console.log(`New subscriber: ${email}`);

    req.flash("success", "🎉 Thank you for subscribing to Wanderlust!");
    res.redirect("/listings");  // Redirect to listings page
});

module.exports = router;
