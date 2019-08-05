<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="frontend.css">
<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.1.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js"></script>
<script type="text/javascript" src="js/examples.js"></script>
<script src="http://d3js.org/d3.v2.js"></script>
<script type="text/javascript" src="js/id3.js"></script>
<script type='text/javascript'
	src='https://www.google.com/jsapi?autoload={"modules":[{"name":"visualization","version":"1","packages":["orgchart"]}]}'> 
</script>



<script type="text/javascript">

 $(document).ready(function(){
  
      console.log('all systems go');

$("#Submit").click(function(e){

          var usd = $("#usd").val();
          var lamphat = $("#lamphat").val();
          var nctt = $("#nctt").val();
          var slkt = $("#slkt").val();
          var play = $("#play").val();
          var tapluat = $(".tapluat");
          data = [
            {
              'usd': usd,
              'lamphat': lamphat,
              'nctt': nctt,
              'slkt': slkt,
              'play': play
            }
          ]
          e.preventDefault();
          var testModel = id3(examples,'play',features);
          drawGraph(testModel,'canvas');
          renderSamples(samples,$("#samples"),testModel,'play',features);
          tapluat.show();
          if(usd != '' && lamphat != '' && nctt != '' && slkt != '')
          {
            renderSamples(data,$("#data"),testModel,'play',features);
          }
           renderTrainingData(examples,$("#training"),'play',features);
      console.log("error");
      console.log(calcError(samples,testModel,'play'));

      });
});

</script>
</head>
<body>
<div id="main" align="center">
    <h1>ID3 Algorithm</h1>
    <input type="text" id="usd" name="usd" required="required" placeholder="Giá trị đồng USD $"
            maxlength="255" class="textbox" style="margin: 5px; padding: 10px; width: 300px;">
  <br>
    <input type="text" id="lamphat" name="lamphat" required="required" placeholder="Lạm Phát"
            maxlength="255" class="textbox" style="margin: 5px;padding: 10px;width: 300px;">
  <br>
    <input type="text" id="nctt" name="nctt" required="required" placeholder="Nhu cầu thị trường"
            maxlength="255" class="textbox" style="margin: 5px;padding: 10px;width: 300px;">
  <br>
    <input type="text" id="slkt" name="slkt" required="required" placeholder="Sản lượng khai khác"
            maxlength="255" class="textbox" style="margin: 5px;padding: 10px;width: 300px; ">
  <br>
  <input type="text" id="play" name="play" required="required" placeholder="Kết quả thực tế"
            maxlength="255" class="textbox" style="margin: 5px;padding: 10px;width: 300px; ">
  <br>
  <a id="Submit" href="../main.html" style=" color: white; width: 150px; background-color: #66CC33; padding: 10px; margin: 5px; display: block; text-decoration: none;">Submit</a><br>
    <div id="data-container">
  	<div  id='canvas'></div>
  	<div align="left">
      <h3>Kết quả tập luật dự đoán giá vàng</h3>
      <div class="tapluat" style="display: none;">
        <p align="left" style=" margin-left: 50px; margin-right: 50px;">
        <?php 
          $url = "resultID3.txt";
          $fh = fopen($url,'r');
          while ($line = fgets($fh))
          {
              echo($line)."<br>";
          }
          fclose($fh);
          ?>
        </p>
      </div>
      <h3>Kết quả dự liệu nhập trực tiếp</h3>
      <table id='data' border="1px;">
        <tr>
          <td>Giá trị USD</td>
          <td>Lạm Phát</td>
          <td>Nhu Cầu Thị Trường</td>
          <td>Sản Lượng Khai Thác</td>
          <td>Kết Quả Tính Toán</td>
          <td>Kết Quả Thực Tế</td>
        </tr>
      </table>
  	  <h3>Kết quả dữ liệu mẫu</h3>
  	  <table id='samples' border="1px;">
        <tr>
          <td>Giá trị USD</td>
          <td>Lạm Phát</td>
          <td>Nhu Cầu Thị Trường</td>
          <td>Sản Lượng Khai Thác</td>
          <td>Kết Quả Tính Toán</td>
          <td>Kết Quả Thực Tế</td>
        </tr>
  	  </table>
  	  <h3>Dữ liệu xây dựng tập luật dự đoán giá vàng</h3>
  	  <table id='training' border="1px;">
        <tr>
          <td>Giá trị USD</td>
          <td>Lạm Phát</td>
          <td>Nhu Cầu Thị Trường</td>
          <td>Sản Lượng Khai Thác</td>
          <td>Kết Quả Thực Tế</td>
        </tr>
  	  </table>
  	</div>
    </div>
</div>
</body>
</html>
