# Báo Cáo Project Nhóm 11

**Môn học:** Internet và công nghệ Web - IE104.Q11.CNVN  
**Tên đề tài:** Web quảng bá du lịch Cà Mau  

---

## 1. Tổng quan

### a. Danh sách các thành viên nhóm 11
* **Trưởng nhóm:** Phạm Minh Thanh - 22521359

### b. Các Đường Liên Kết (Links)
* **Link Google Drive:** [https://drive.google.com/drive/folders/1NESfp9sKz0IUM7hIghsFD8fVytfqjCUx](https://drive.google.com/drive/folders/1NESfp9sKz0IUM7hIghsFD8fVytfqjCUx?usp=sharing)
* **Link GitHub:** [https://github.com/minhthanh936/Do_an-IE104.Q11.CNVN-Minh_Thanh](https://github.com/minhthanh936/Do_an-IE104.Q11.CNVN-Minh_Thanh)
* **Link Video Demo trên YouTube:** [https://www.youtube.com/watch?v=LQ5V90dzONI](https://www.youtube.com/watch?v=LQ5V90dzONI)
* **Link nơi quản lý công việc nhóm:** [https://docs.google.com/spreadsheets/d/1qV2mLiifa-LNiVbDGxqw1GU7VhWaqJqk0EwGpMS0L4A](https://docs.google.com/spreadsheets/d/1qV2mLiifa-LNiVbDGxqw1GU7VhWaqJqk0EwGpMS0L4A)

### c. Phân công công việc

| Nội dung | Người làm | Tỉ lệ công việc |
| :--- | :--- | :--- |
| Bố cục chung của trang (Header, Menu, Footer) | Phạm Minh Thanh | 20% |
| Trang trí (màu sắc, ảnh nền, font, ...) | Phạm Minh Thanh | 10% |
| Các thẻ nội dung, container, tab, thẻ article, nút bấm | Phạm Minh Thanh | 25% |
| Các Tab, Các slide ảnh | Phạm Minh Thanh | 20% |
| JavaScript | Phạm Minh Thanh | 15% |
| Nội dung thông tin trên trang | Phạm Minh Thanh | 10% |
| **Tổng** | **1 người** | **100%** |

---

## 2. Bố cục chung

### a. Bố cục chung và màu sắc
* **Màu sắc chủ đạo:** Sử dụng chủ yếu các tông màu:
  * `#6dd0f6`: Màu xanh nước biển (màu chủ đạo)
  * `#00a84f`: Màu xanh lá
  * `#ff0001`: Màu đỏ
* **Thanh Menu:**
  * Có nhiệm vụ điều hướng và trang trí cho trang web.
  * Chứa các liên kết dẫn đến các trang khác nhau (bao gồm cả chữ "DU LỊCH CÀ MAU" để quay về trang chủ).
  * Menu gồm 6 mục khác nhau tương ứng với 6 trang. Mục có nền đỏ biểu thị cho trang hiện tại.
  * Khi di chuột (hover) lên các mục khác, mục đó sẽ đổi sang màu xanh.
* **Hình nền:** Làm nền hiển thị cho toàn bộ trang web.
* **Thanh cuối trang (Footer):** Hiển thị thông tin địa chỉ, số điện thoại liên hệ và bản quyền ở cuối trang web.

### b. Các trang trong hệ thống
* **Trang chủ:** Phần thân (body) gồm 2 thành phần chính là cấu trúc "LonAd" và "slideshow".
  * "LonAd" đóng vai trò làm banner giới thiệu trang, phía dưới tích hợp nút bấm dẫn đến trang *Địa điểm*.
  * Slideshow tự động chuyển đổi qua hình ảnh các địa điểm du lịch; người dùng có thể nhấn vào ảnh để mở liên kết chi tiết.
* **Trang Địa điểm:** Gồm nhiều khối thông tin dạng thẻ ("card") tương ứng với các địa điểm khác nhau, đi kèm dòng chữ "Đọc thêm ->" làm đường dẫn.
* **Trang Dịch vụ:** Sử dụng cấu trúc "tab" và các "tab-button" để lựa chọn loại phương tiện di chuyển. Mỗi "tab-button" tương ứng với một số "card" hiển thị chi tiết về dịch vụ di chuyển đó khi được chọn.
* **Trang Bài báo:** Gồm có 1 bài viết chính ("main-article") và danh sách các bài viết phụ ("article-list" với nhiều "article-item"), tóm tắt thông tin các bài báo liên quan kèm link nguồn.
* **Trang Di chuyển (đến Cà Mau):** Sử dụng thiết kế "tab" và các "tab-button" để chọn phương tiện đến Cà Mau. Mỗi "tab-button" tương ứng với một khối "LonAd" hiển thị thông tin và nút dẫn tương thích.
* **Trang Bản đồ:** Tích hợp phần tử `iframe` của OpenStreetMap cùng một Bản đồ hành chính của tỉnh.

### c. Các phần tử giao diện chính
* **Phần tử LonAd:** Được tái sử dụng ở nhiều trang, tạo một lớp nền bán trong suốt (opacity: 0.6) giúp làm nổi bật phần văn bản (Text) phía trên. Phần tử này cần có class `active` để hiển thị.
* **Phần tử button:** Thiết kế nút bấm màu xanh, tự động chuyển sang màu đỏ khi di chuột qua.
* **Phần tử slideshow-container, slide fade:** Trình trình chiếu ảnh tự động chuyển đổi mỗi 5 giây bằng JavaScript, hỗ trợ chuyển slide thủ công bằng nút điều hướng và cho phép click vào ảnh để mở liên kết.
* **Phần tử card, container, attraction-grid, section-title:** Các thẻ thông tin (`card`) được đặt trong một lưới (`attraction-grid`) thuộc một `container` chung. Lưới này sử dụng JavaScript để ẩn/hiện tập hợp các thẻ dựa trên trạng thái `active`.
* **Phần tử tabs, tabs-button:** Thanh điều hướng nội dung có nền bán trong suốt, sử dụng JavaScript để xử lý sự kiện. Tab được chọn sẽ có chữ màu đỏ, và khi nhấn vào thì nền sẽ chuyển tạm thời sang màu trắng.
* **Animation:** Tích hợp hiệu ứng chuyển động nhẹ (phần tử trồi lên một chút khi hiển thị).

---

## 3. Đánh giá hệ thống

### a. Kiểm tra và Thử nghiệm
* **Khả năng thích ứng dọc (Responsive):**
  * Giao diện cơ bản thích ứng được với các kích thước màn hình thông qua việc sử dụng `@media (max-width: 600px)` trong file CSS.
  * *Hạn chế:* Phần Menu chưa highlight được trang hiện tại và không đổi màu khi di chuột qua trên giao diện thu nhỏ.
* **Kiểm tra tiêu chuẩn chuẩn hóa (Markup Validation Service):**
  * Kết quả phần lớn đều tốt, tuy nhiên còn tồn tại một số cảnh báo lỗi do sử dụng thuộc tính lỗi thời: `"The align attribute on the p element is obsolete."`.
* **Kiểm tra hiệu năng (Performance trên Chrome DevTools):**
  * Chỉ số LCP (Largest Contentful Paint) đạt 1.07 s (Tốt), tác vụ tương tác INP đạt 24 ms (Tốt).
  * Chỉ số CLS (Cumulative Layout Shift) ở mức 0.41 (Kém) - nguyên nhân có thể do hoạt động dịch chuyển của phần tử slideshow.
  * *Lỗi Font:* Hệ thống ghi nhận cảnh báo không tìm thấy định dạng hỗ trợ cho font-family `"Ubuntu"` và `"PTSerif"`.

### b. Nhược điểm cần khắc phục
* Bài đồ án nhìn chung còn tương đối sơ sài.
* Phong cách trang trí và phối màu sắc phối hợp chưa thực sự hài hòa, vừa mắt.
* Hệ thống cần được tối ưu sâu hơn về mã nguồn cũng như hiệu năng tải trang.
