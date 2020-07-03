<template>
  <div>
		 <transition name="bounce">
			<div class="grade_box">
				<div class="grade_child">
					<p class="process-animate"></p>
				</div>
			</div>
		 </transition>
  </div>
</template>
<script>
setTimeout(function() {
  alert("加载完毕");
}, 3000);
</script>
export default {
  name:'',
  data:{
    
  }
}
</script>
<style  scoped>
.grade_box {
  width: 500px;
  height: 20px;
  border-radius: 10px;
  background: #ddd;
  margin: 50px auto;
}
.grade_child {
  position: relative;
  height: 100%;
  border-radius: inherit;
}
.process-animate {
  background: -webkit-linear-gradient(left, #f48621, #ef3126);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  animation: process 3s linear forwards;
}
@keyframes process {
  0% {
    left: 0;
    right: 100%;
  }

  20% {
    right: 80%;
  }

  40% {
    right: 60%;
  }

  60% {
    right: 40%;
  }

  80% {
    right: 20%;
  }

  100% {
    right: 0;
  }
}

.bounce-enter-active {
      animation: bounce-in .5s;
    }

    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }

      50% {
        transform: scale(1.5);
      }

      100% {
        transform: scale(1);
      }
    }
</style>