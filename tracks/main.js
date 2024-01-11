class Player {
  
  btns = document.querySelectorAll('button')
  btn = document.querySelector('.action')
  audio = document.querySelector('audio')
  prev = document.querySelector('.prev')
  next = document.querySelector('.next')
  header = document.querySelector('.header')
  container = document.querySelector('.container')
  img = document.querySelector('.img')
  playFlag = true;
  currentIndexSong = 0;

  playList = [
    { path: './audio/song1.mp3', artist: 'lavina', cover: './img/img1.png' },
    { path: './audio/song2.mp3', artist: 'volodya', cover: './img/img2.png' },
    { path: './audio/song3.mp3', artist: 'zhorik', cover: './img/img3.png' },
    { path: './audio/song4.wav', artist: 'untitled', cover: './img/transparent.png' },
    { path: './audio/song5.wav', artist: 'untitled', cover: './img/transparent.png' },
  ]

  toStart() {
    this.container.addEventListener('click', () => {
      this.audio.controls ? this.audio.controls = false : this.audio.controls = true
    })
    this.toUpdate()
    for (let btn of this.btns) {
      const class_ = btn.className.split(' ');
      btn.addEventListener('click', () => {
        if (class_.includes('prev')) {
          this.next.disabled = false;
          this.toUpdate('-')


        }
        else if (class_.includes('next')) {
          this.prev.disabled = false;
          this.toUpdate('+')


        } else {
          this.useState();
        }
      })
    }
  }
  useState() {
    if (!this.playFlag) {
      this.playFlag = true;
      this.audio.pause();
      this.btn.textContent = 'Play';
    } else {
      this.playFlag = false;
      this.audio.play()
      this.btn.textContent = 'Stop';
    }
  }

  isDisabled() {
    this.currentIndexSong === this.playList.length - 1 ?
      this.next.disabled = true : this.currentIndexSong === 0 ?
        this.prev.disabled = true : false
  }

  toUpdate(sign) {
    if (sign === '-') {
      this.currentIndexSong--;
    }
    else if (sign === '+') {
      this.currentIndexSong++;
    }
    this.audio.src = this.playList[this.currentIndexSong].path
    this.img.style = `background-image: url(${this.playList[this.currentIndexSong].cover})`
    this.header.textContent = this.playList[this.currentIndexSong].artist
    this.isDisabled()

    if (!this.playFlag) {
      this.audio.play()
    }
  }
}
const player = new Player();
player.toStart();