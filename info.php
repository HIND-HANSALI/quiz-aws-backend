<?php
include_once 'model/database.php';
$title="Quizizy AWS"; 
include 'include/head.php';


// $conn = new Connection();
// $conn-> connect();

?>

<body id="body-color">
 <?php
 require 'include/navbar.php'; 
 require 'include/stepper.php'; 

 ?>
 

  <div class="info_box ">
        <!-- <div class="card col-lg-4 text-center"> -->
        <div class="info_title">
          <span> Some rules of this Quiz</span>
        </div>
        <div class="info_list">
          <p class="info">1-you will have <span>15 seconds  </span>foreach question</p>
          <p class="info">2-You can't selectany option once time goes off .</p>
          <p class="info">3-you can't exit from the Quiz while you're playing</p>
          <p class="info">1-you will get points</p>
        </div>
        <div class="user_name container">
          <form action="">
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">User Name :</label>
              <input type="text" class="form-control" id="user-name" placeholder="Enter your Name">
            </div>
           </form>
        </div>
        <div class="buttons">
          <form action="dataAjax.php" method="POST">
            <a href="index.html" class="btn btn-outline-primary quit">Exit Quizz</a>
            <button type="button" class="btn btn-primary continue" name="continue" onclick="Continue()">Continue</button>
            </form>
            <!-- <a href="#" class="btn btn-primary continue" onclick="Continue()">Continue</a> -->
        </div>
  </div>

   <!-- </div> -->

   <!-- Quiz Box -->

   <div class="quiz_box">
    <header>
      <div class="header">
        <div class="title">Awesome Quiz Application</div>
        <div class="timer">
            <div class="time_left_txt">Time Left</div>
            <div class="timer_sec">15</div>
        </div>
        <div class="time_Pogress" id="time_Pogress"></div>
      </div>
      <div class="time_line"></div>
    </header>
    <section>
      <div class="question_text">
        <!-- <span>Question</span> -->
        <!-- Here I've inserted question from JavaScript -->
      </div>
      <div class="option_list ">
        <!-- <div class="option">
        <span>Response 1</span>
        <div class="icon check"><i class="bi bi-check-lg"></i></div>

        Here I've inserted options from JavaScript
        </div> -->

        <div class="option_list">
          <div class="option ">
            <span>Response 2</span>
            <div class="icon cross"><i class="bi bi-x-lg"></i></div>
            <!-- fa-solid fa-xmark -->
            <!-- Here I've inserted options from JavaScript -->
          </div>
        </div>
      </div>
    </section>
    <!-- footer of Quiz Box -->
    <footer id="footer">

        <div class="total_question">
            <!-- Here I've inserted Question Count Number from JavaScript -->
            <p><strong>2 of 5 </strong> Questions</p>
        </div>
        <div>
          <button class="btn btn-primary next_bt" id="next_btn" style="cursor: pointer !important;" onclick="Next()" >Next Que</button>
        </div>
    </footer>
</div>
   <!-- Result Box -->
<div class="result_box">
  <!-- <div class="icon">
      <i class="bi bi-android"></i>
  </div> -->
  <div class="complete_text">You've completed the Quiz!</div>
  <div class="score_text">
      <!-- Here I've inserted Score Result from JavaScript -->
      
      <!-- <span>You got only <p>2</p>out of <p>5</p></span> -->
  </div>
  <div class="explication">
    <!-- <h4>explications</h4>
    <div class="justify">
    <h4 class="justify-question">hiii</h4>
    <h5 class="justify-answer">hjjj</h5>
    <p class="justify-explication">kjjjxghhsqffgvsdfghjklwxcvbnsdfghyjklmwxcvbn,;:zertyuiopmxcvbn,;:!sdfghjklmwxcvbn,;:sssssssss</p>
    </div> -->
  </div>
  <div class="buttons">
      <button class="restart btn btn-primary" onclick="Restart()">Replay Quiz</button>
      <!-- <button class="quit btn btn-outline-primary">Quit Quiz</button> -->
      <a href="index.html" class="quit btn btn-outline-primary" >Quit Quiz</a>
      <!-- <button class="justification btn btn-outline-primary" onclick="justification()">Justification</button> -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="Justification()">
        justification
      </button>
  </div>
</div>


<!-- modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        .<div class="explication_text">
          <!-- Here I've inserted explication from JavaScript -->
          
          <!-- <span>You got only <p>2</p>out of <p>5</p></span> -->
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn btn-primary">Understood</button> -->
      </div>
    </div>
  </div>
</div>




<!-- js Questions & Options -->
<script src="js/questions.js"></script>
<!-- js Quiz codes -->
<script src="js/script.js"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


</body>
</html>