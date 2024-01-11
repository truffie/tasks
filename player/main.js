class Player {
  play = document.querySelector('.play');
  repeat = document.querySelector('.repeat')
  action = document.querySelectorAll('.action');
  audio = document.querySelector('audio');
  artist = document.querySelector('h1');
  desc = document.querySelector('h2');
  favorite = document.querySelector('.like')
  spotify = document.querySelector('.title__img')
  currentIndex = 0;
  arr = [
    {
      path: './assets/music/song1.wav',
      artist: 'Seasons Change',
      description: 'Quasimoto',
      like: false
    },
    {
      path: './assets/music/song2.wav',
      artist: 'flutte',
      description: 'x-mas',
      like: false
    },
    {
      path: './assets/music/song3.wav',
      artist: 'bear',
      description: 'happy',
      like: false
    },
    {
      path: './assets/music/song4.wav',
      artist: 'bee',
      description: 'noisy',
      like: false
    },
    {
      path: './assets/music/song5.wav',
      artist: 'skunk',
      description: 'nasty',
      like: false
    },
    {
      path: './assets/music/song6.wav',
      artist: 'panda',
      description: 'kind',
      like: false
    }]
  checkFlag() {
    this.play.className.split(' ').includes('play') ? this.doPlay() : this.doStop()

  }
  doPlay() {
    this.audio.play();
    this.play.classList.add('stop')
    this.play.classList.remove('play');
  }

  doStop() {
    this.audio.pause();
    this.play.classList.add('play')
    this.play.classList.remove('stop')
  }

  doSound() {
    this.play.addEventListener('click', () => {
      this.checkFlag()
    });
    this.repeat.addEventListener('click', () => {
      this.audio.currentTime = 0;
    })
  }

  doLike() {
    this.favorite.addEventListener('click', () => {

      if (!this.arr[this.currentIndex].like) {
        this.arr[this.currentIndex].like = true;
        this.artist.style.color = '#bc3f3c'
        // this.desc.style.color = '#f7cd46'
        this.spotify.style = 'background-image: url(./assets/spotifyHovered.svg'
        this.favorite.classList.add('liked')
        this.favorite.classList.remove('like')

      } else {
        this.arr[this.currentIndex].like = false;
        // this.desc.style.color = '#000'
        this.artist.style.color = '#000'
        this.spotify.style = 'background-image: url(./assets/spotify.svg'
        this.favorite.classList.add('like')
        this.favorite.classList.remove('liked')
      }
    })

  }
  refreshInfo() {
    this.audio.src = this.arr[this.currentIndex].path
    this.artist.textContent = this.arr[this.currentIndex].artist
    this.desc.textContent = this.arr[this.currentIndex].description

  }
  bindAction() {
    setInterval(() => {
   
      if (player.audio.duration === player.audio.currentTime) {
        this.audio.currentTime = 0;
        this.audio.play();
      }
    }, 1500)
    for (let btn of this.action) {
      const classes = btn.className.split(' ');
      btn.addEventListener('click', () => {


        if (classes[0] === 'prev') {
          this.currentIndex === 0 ? false : --this.currentIndex;
        } else if (classes[0] === 'next') {
          this.currentIndex === this.arr.length - 1 ? false : ++this.currentIndex;
        }

        this.refreshInfo()

        this.play.className.split(' ').includes('stop') ? this.audio.play() : this.audio.pause();

        if (!this.arr[this.currentIndex].like) {
          this.favorite.classList.add('like')
          this.favorite.classList.remove('liked')
          this.artist.style.color = '#000'
          // this.desc.style.color = '#000'
          this.spotify.style = 'background-image: url(./assets/spotify.svg'
        } else {
          this.spotify.style = 'background-image: url(./assets/spotifyHovered.svg'
          // this.desc.style.color = '#f7cd46'
          this.artist.style.color = '#bc3f3c'
          this.favorite.classList.add('liked')
          this.favorite.classList.remove('like')

        }
      })

    }

  }
}
const player = new Player();
player.bindAction()
player.doSound();
player.doLike();