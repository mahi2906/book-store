const { sendEmail } = require('./mail');

const sendBulkEmailNotifications = async () => {
  const users = await RetailUser.findAll();
  const newBookReleases = await Book.findAll({ where: { releaseDate: { [Op.gt]: new Date() } } });

  let emailCount = 0;
  for (const user of users) {
    for (const book of newBookReleases) {
    const emailData = {
      id:revenuedetails.id,
      authorName:authorName.fullName,
      month : revenuedetails.month,
      year : revenuedetails.year,
      revenue: revenuedetails.revenue
    };

      const success = await sendEmail(emailData,user.email,"revenue.html", 'New Book Release', emailData);
      if (success) {
        emailCount++;
        if (emailCount >= 100) {
          await new Promise(resolve => setTimeout(resolve, 60000));
          emailCount = 0;
        }
      }
    }
  }
};

cron.schedule('0 * * * *', sendBulkEmailNotifications);
