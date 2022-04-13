<template>
  <div id="troubled-symbols">
    <div>
      <h1 id="text-1">Troubled</h1>
    </div>
    <div
      id="troubled-trigger"
        @mouseover="startAnimation"
        @mouseleave="endAnimation"
    >
      <svg 
      width="220" 
      height="220" 
      viewBox="0 0 150 162" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      >
        <g id="symbol">
          <circle id="c-left" cx="5" cy="81" r="6" fill="white"/>
          <circle id="c-right" cx="145" cy="81" r="6" fill="white"/>
          <path id="arw-top" d="M72 -5.24537e-07L78 0L75 6L72 -5.24537e-07Z" fill="white"/>
          <path id="arw-bottom" d="M78 162H72L75 156L78 162Z" fill="white"/>
        </g>
          <circle id="c-center" cx="75" cy="81" r="15" fill="white"/>
      </svg>
    </div>
    <div>
      <h1 id="text-2">Symbols</h1>
    </div>
  </div>
</template>

<script>
  export default {
    
    data() {
      return {
        isActive: false
      }
    },
    
    mounted() {
      this.setStage()
    },

    methods: {

      setStage() {
        
        },

      startAnimation() {
        const SplitText = this.$SplitText

        const tSplit = new SplitText("#text-1", { type: "chars", charsClass: "tl++" })
        const troubled = tSplit.chars.slice()
        const CustomEase = this.$CustomEase

        this.isActive = true
        CustomEase.create("easeIn", "M0,0 C0.692,0.07 0.256,0.962 1,1")
        this.$gsap.to("#symbol", { scale: 0.4, rotation: 360, duration: 1, transformOrigin: "50% 50%", ease: "easeIn" })
        this.$gsap.to("#c-center", { scale: 1.2, duration: 1, ease: "easeIn", transformOrigin: "50% 50%" } )
      },

      endAnimation() {
        const CustomEase = this.$CustomEase

        this.isActive = false
        CustomEase.create("easeIn", "M0,0 C0.77,0 0.196,1 1,1")
        this.$gsap.to("#symbol", { scale: 1, rotation: 0, duration: 1, transformOrigin: "50% 50%", ease: "easeIn" })
        this.$gsap.to("#c-center", { scale: 1, duration: 1, ease: "easeIn", transformOrigin: "50% 50%" } )
      }
    }
  }
</script>

<style scoped>
  svg {
    cursor: pointer;
  }

  h1 {
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1rem;
  }

  #troubled-symbols {
    display: flex;
    align-items: center;
  }

  #symbol-wrapper {
    display: block;
    cursor: pointer;
    margin: 0 8rem;
  }

  #troubled-trigger {
    display: inline-block;
    cursor: pointer;
    margin-right: 4rem;
  }

  #text-1 {
    margin-right: 4rem;
  }
  
  #text-1 {
    margin-right: 4rem;
  }
</style>