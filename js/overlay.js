// Xử lý sự kiện submit form
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form gửi thông tin theo cách mặc định

    // Lấy giá trị từ các trường input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Gửi email
    sendEmail(name, email);
  });

  // Hàm gửi email
  function sendEmail(name, email) {
    // Cấu hình Nodemailer
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com", // Địa chỉ email người gửi
        pass: "your-password" // Mật khẩu email người gửi
      }
    });

    // Cấu hình email
    var mailOptions = {
      from: "your-email@gmail.com", // Địa chỉ email người gửi
      to: "trandinhnhat300499@gmail.com", // Địa chỉ email người nhận
      subject: "Xác nhận tham dự tiệc",
      text: "Họ và tên: " + name + "\nEmail: " + email
    };

    // Gửi email
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        // Xử lý sau khi gửi thành công
        // Ví dụ: Hiển thị thông báo thành công cho người dùng
        alert("Email đã được gửi thành công!");
      }
    });
  }