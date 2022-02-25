# ES6:

<ul>
<li>var / let, const:
<ul>
<li> Scope:
<ul> 
<li> Code block: if else, loop, {},...
<li>  let,const : trong block
<li> var : trong và ngoài block
<li>  không bị trùng 
</ul>
<li> Hosting
<ul> 
<li> var được hỗ trợ
<li> let, const k được hỗ trợ
<li> ví dụ: <br>

**Sai:** <br>
 a = 1;<br>
let a;<br>
**Đúng** :<br>
let a; <br>
a = 1;
</ul>
<li> const không gán lại lần 2 được
<li> var, let có thể gán lại
<li> code thuần : var
<li> Babel: const, let
</ul>

<li> Teamplate literals:
<ul> 
<li> Sử dụng `` thay vì sử dụng '' or ""
<li> Sử dụng ${} để đưa biến vào thay vì dùng +
<li> Để hiển thị những nội suy dùng \, ví dụ : \${} => ${}
</ul>
<li> Arrow funtion
<ul>
<li> Viết hàm ngắn gọn hơn
<li> Sau => được hiểu là return
<li> Không dùng làm contructor funtion được
</ul>
<li> Classes
<li> Default parameter value
<ul>
<li> Định nghĩa ra những hàm có những tham số k bắt buộc nhập
Enhanced object literals
<li> Định nghĩa key : value cho obj
<li> Định nghĩa method cho obj
<li> Định nghĩa key cho Obj dưới dạng biến
</ul>
<li> Destructuring (Phân rã)

</ul>

# Nguồn tham khảo: 

- Javascript F8 Official
- Link: https://www.youtube.com/watch?v=0SJE9dYdpps&list=PL_-VfJajZj0VgpFpEVFzS5Z-lkXtBe-x5

-----------------------------------------------------------------------------------

## Arrow funtion
<ul>
<li> Là dạng rút gọn của định nghĩa hàm truyền thống, nhưng có 1 số hạn chế và không thể dùng được trong tất cả trường hợp

<li> Khác nhau và hạn chế của hàm Arrow:
<ul>
<li> Không có kết nói với this hoặc supper và không thể dùng như phương thức
<li> Không có đối số, hoặc những từ khóa new.target
<li> Không phù hợp với các phương thức gọi, áp dụng và gắn kết dựa trên phạm vi
<li> Không thể dùng như contructor để tạo đối tượng
<li> Không thể dùng yield trong thân hàm
</ul>
<li> Phân biệt giữa Arrow function và function trong JS:
<ul>
<li> Arrow function thường ngắn gọn hơn function
<li> Arrow function không bind this
<li> Arrow function không bind arguments
<li> Arrow function không phù hợp làm method cho object
<li> Arrow function không thể sử dụng làm hàm constructor
<li> Arrow function không có thuộc tính prototype
<li> Arrow function không được hoisted
</ul>
</ul>

--------------------------------------------------------------------------------------
## Class

<ul>
<li> Là 1 khuôn mẫu để tạo ra đối tượng
<li> Có 2 cách tạo ra class
<ul>
<li>  class declaration
<li>  class expression
</ul> 

### **Các phương thức của class**

 ***Contructor***
<li> Là 1 method đặc biệt để tạo và khởi tạo 1 đối tượng từ 1 class nào đó
<li> Mỗi class chỉ có 1 phương thức tên "contructor"

 **Getter và Setter**
<li>Getter
<ul>
<li> Getter method được sử dụng để truy cập các thuộc tính của 1 đối tượng.
<li> Dùng từ khóa get để tạo getter method
<li> Thông thường thì có bao nhiêu thuộc tính thì sẽ có bấy nhiêu getter method trong class
</ul>
<li> Setter
<ul>
<li> Cho phép thay đổi giá trị thuộc tính của đối tượng
<li> Dùng từ khóa set để tạo setter method
<li> Tương tự getter thì có bao nhiêu thuộc tính thì sẽ có bấy nhiêu setter method trong class
</ul>

 **Static methods**
<li> Sử dụng từ khóa static để định nghĩa 1 static method
<li> Được dùng để tạo các chức năng tiện ích của ứng dụng
Hosting đối với class:
<li> Phải khai báo 1 lớp trước khi sử dụng nó

**Kế thừa class (inheritance)**
<li> Để kế thừa 1 class nào đó ta sử dụng từ khóa extends
<li> Phương thức super() là phương thức tham chiếu đến lớp cha.
<li> Khi gọi đến super() thì nó sẽ gọi đến phương thức khởi tạo của lớp cha và có quyền truy cập đến các thuộc tính và phương thức khởi tạo của lớp cha.
<li> Cũng có thể gọi phương thức của lớp cha thông qua super() khi overwride phương thức đó.

**Từ khóa this trong class**
<li> this thường được chỉ đến Object chứa phương thức đang được gọi thực thi
</ul>

## Tài liệu tham khảo: 
- https://vi-magento.com/tim-hieu-arrow-function-trong-javascript/
- https://niithanoi.edu.vn/class-trong-javascript.html#:~:text=Class%20c%C3%B3%20th%E1%BB%83%20hi%E1%BB%83u%20l%C3%A0,v%C3%A0%20ph%C6%B0%C6%A1ng%20th%E1%BB%A9c%20gi%E1%BB%91ng%20nhau.
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes?retiredLocale=vi#class_expressions
