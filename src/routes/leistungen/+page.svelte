<script lang='ts'>
  import Section from '$lib/components/ui/Section.svelte'
</script>

<Section>
  <div class='grid justify-items-start gap-4 md:grid-cols-[200px_1fr]'>
    <div class='top-25 sticky hidden flex-col gap-3 self-start md:flex'>
      <h2 class='text-h5 font-semibold' id='index'>Auf dieser Seite</h2>
      <hr class='w-1/3 border-gray-400' />
      <nav aria-labelledby='index'>
        <ul>
          <li>
            <a href='#diagnostik'>Diagnostik</a>
          </li>
          <li>
            <a href='#reisemedizin'>Reisemedizin</a>
          </li>
          <li>
            <a href='#impfungen'>Impfungen</a>
          </li>
          <li>
            <a href='#geriatrie'>Geriatrie</a>
          </li>
          <li>
            <a href='#infektiologie'>Infektiologie</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class='w-full relative overflow-hidden py-[0_5rem]'>
      <div class="w-[450px] lg:w-[950px] h-[315px] lg:h-[650px] -bottom-20 left-0 lg:-bottom-80 opacity-10 lg:left-1/2 lg:-translate-x-1/2
        rotate-27 bg-primary -z-10  absolute"></div>
      <div class="w-[255px] lg:w-[750px] h-[150px] lg:h-[450px] top-1/2 opacity-10 -right-20 lg:-right-80
        rotate-75 bg-secondary -translate-y-1/2
        -z-10  absolute"></div>
      <ul class=' grid gap-10 lg:gap-40'>
        <li class='max-w-full'>
          <article class='flex flex-col gap-4 lg:flex-row'>
            <enhanced:img
              src='$assets/Microscope.jpg'
              alt=""
              sizes='min(700px, 100vw)'
            />
            <div>
              <h2 id='diagnostik' class='scroll-mt-25 mb-4'>Diagnostik</h2>
              <div class='flex flex-col gap-6'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque similique
                  nostrum sit veritatis accusamus possimus et voluptatem magnam
                </p>
                <ol class='list-inside list-decimal'>
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Quaerat cumque similique nostrum sit veritatis accusamus possimus e</li>
                  <li>t voluptatem magnam officiis consequatur quam iure sunt deleniti libero</li>
                  <li>dignissimos non dolorum! Dolorem!</li>
                </ol>

                <p>
                  Officiis consequatu quam iure sunt deleniti libero, dignissimos non dolorum!
                  Dolorem!
                </p>
              </div>
            </div>
          </article>
        </li>
        <li class='max-w-full'>
          <article class='flex flex-col gap-4 lg:flex-row'>
            <enhanced:img src='$assets/Travel.jpg' alt="" sizes='(width >= 64rem) 700px, 100vw' />
            <div class='order-1'>
              <h2 id='reisemedizin' class='scroll-mt-25 mb-4'>Reisemedizin</h2>
              <div class='grid gap-4'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque similique
                  nostrum sit veritatis accusamus possimus et voluptatem magnam
                </p>
                <ul class='list-inside list-disc'>
                  <li>
                    officiis consequatur quam iure sunt deleniti libero, dignissimos non dolorum!
                  </li>
                  <li>Dolorem! Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>
                    Quaerat cumque similique nostrum sit veritatis accusamus possimus et voluptatem
                    magnam officiis consequatur quam iure sunt deleniti libero, dignissimos non
                    dolorum! Dolorem!
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </li>
        <li class='max-w-full'>
          <article class='flex flex-col gap-4 lg:flex-row'>
            <enhanced:img src='$assets/Vaccine.jpg' alt="" sizes='(width >= 64rem) 700px, 100vw' />
            <div>
              <h2 id='impfungen' class='scroll-mt-25 mb-4'>Impfungen</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque similique
                nostrum sit veritatis accusamus possimus et voluptatem magnam officiis. <br /> Consequatur
                quam iure sunt deleniti libero, dignissimos non dolorum! Dolorem!
              </p>
              <br />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque similique
                nostrum sit veritatis accusamus possimus et voluptatem magnam officiis consequatur
                quam iure sunt deleniti libero, dignissimos non dolorum! Dolorem!
              </p>
              <br />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque similique
                nostrum sit veritatis accusamus possimus et voluptatem magnam officiis consequatur
                quam iure sunt deleniti libero, dignissimos non dolorum! Dolorem!
              </p>
            </div>
          </article>
        </li>
        <li class='max-w-full'>
          <article class='flex flex-col gap-4 lg:flex-row'>
            <enhanced:img
              src='$assets/Geriatrics.jpg'
              alt=""
              sizes='(width >= 64rem) 700px, 100vw'
            />
            <div>
              <h2 id='geriatrie' class='scroll-mt-25 mb-4'>Geriatrie</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque similique
                nostrum sit veritatis accusamus possimus et voluptatem magnam officiis consequatur
                quam iure sunt deleniti libero, dignissimos non dolorum! Dolorem!</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque similique nostrum sit veritatis accusamus possimus et voluptatem magnam officiis consequatur
                quam iure sunt deleniti libero, dignissimos non dolorum! Dolorem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque similique nostrum sit veritatis accusamus possimus et voluptatem magnam officiis consequatur
                quam iure sunt deleniti libero, dignissimos non dolorum! Dolorem!
              </p>
            </div>
          </article>
        </li>
        <li class='max-w-full'>
          <article class='flex flex-col gap-4 lg:flex-row'>
            <enhanced:img src='$assets/Virus.jpg' alt="" sizes='(width >= 64rem) 700px, 100vw' />
            <div>
              <h2 id='infektiologie' class='scroll-mt-25 mb-4'>Infektiologie</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque similique
                nostrum sit veritatis accusamus possimus et voluptatem magnam officiis consequatur
                quam iure sunt deleniti libero, dignissimos non dolorum! Dolorem!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque similique
                nostrum sit veritatis accusamus possimus et voluptatem magnam officiis consequatur
                quam iure sunt deleniti libero, dignissimos non dolorum! Dolorem!
              </p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </div>
</Section>

<style>
  article picture,
  article div {
    flex: 1 0 25%;
  }

  article picture {
    max-width: 700px;
  }

  enhanced\:img {
    object-fit: cover;
    border-radius: 0.5rem;
    width: 100%;
    max-height: 300px;
    height: 100%;
  }

  p {
    max-width: 100%;
  }

  @media (width >= 1024px) {
    li:nth-of-type(even) article picture {
      order: 2;
    }

    enhanced\:img {
      max-width: 700px;
      max-height: 400px;
    }
  }
</style>
