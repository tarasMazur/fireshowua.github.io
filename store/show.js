const state = {
  showList: {
    en: [
      {
        type: 'fire show',
        urlImage: '/img/show/fire-show.jpg',
        programs: [
          {
            name: 'moonlight',
            about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos voluptas obcaecati provident asperiores sed repudiandae perspiciatis doloremque optio! Perspiciatis, error!',
            promo: {
              urlPoster: '/img/defaul.jpg',
              urlVideo: 'https://www.youtube.com/embed/Kxjvsaws7UQ'
            },
            gallery: [
              '/img/defaul.jpg',
              '/img/defaul.jpg',
              '/img/defaul.jpg',
              '/img/defaul.jpg'
            ],
            plans: [
              { artistCount: 1, price: 2000, urlImage: '/img/defaul.jpg', urlPoster: '/img/defaul.jpg', urlVideo: 'https://www.youtube.com/embed/Kxjvsaws7UQ', about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint officia esse ex voluptatem aperiam nesciunt eligendi reprehenderit modi, explicabo.' },
              { artistCount: 2, price: 4000, urlImage: '/img/defaul.jpg', urlPoster: '/img/defaul.jpg', urlVideo: 'https://www.youtube.com/embed/Kxjvsaws7UQ', about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sint officia esse ex voluptatem aperiam nesciunt eligendi reprehenderit modi, explicabo.' }
            ]
          }
        ],
        extracts: [
          { name: 'fire heart', price: 123, icon: '', urlImage: '/img/defaul.jpg', urlPoster: '/img/defaul.jpg', urlVideo: 'https://www.youtube.com/embed/Kxjvsaws7UQ', about : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae velit praesentium, minima hic quisquam maiores natus, nisi neque! Debitis, rerum.' },
          { name: 'fire cube', price: 456, icon: '', urlImage: '/img/defaul.jpg', urlPoster: '/img/defaul.jpg', urlVideo: 'https://www.youtube.com/embed/Kxjvsaws7UQ', about : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae velit praesentium, minima hic quisquam maiores natus, nisi neque! Debitis, rerum.' }
        ]
      }
    ]
  },
  currentShow: null,
  currentProgram: null,
  currentPlan: null,
  selectedExtract: []
}

const getters = {
  SHOW_LIST: (state, rootGetters) => state.showList[rootGetters.LOCALE],
  CURRENT_SHOW: state => state.currentShow,
  CURRENT_PROGRAM: state => state.currentProgram,
  CURRENT_PLAN: state => state.currentPlan,
  SELECTED_EXTRACT: state => state.selectedExtract
}

const mutations = {
  SELECT_SHOW: (state, data) => {
    if (!data.selectedShowType) {
      state.currentShow = null
      return
    }

    state.currentShow = state.showList[data.locale].find(show => {
      if (show.type === data.selectedShowType) {
        return true;
      }
    })
  },
  SELECT_PROGRAM: (state, selectedProgramName) => {
    if (!selectedProgramName) {
      state.currentProgram = null
      return
    }

    state.currentProgram = state.currentShow.programs.find(program => {
      if (program.name === selectedProgramName) {
        return true;
      }
    })
  },
  SELECT_PLAN: (state, selectedPlanArtistCount) => {
    if (!selectedPlanArtistCount) {
      state.currentPlan = null
      return
    }

    state.currentPlan = state.currentProgram.plans.find(plan => {
      if (plan.artistCount === selectedPlanArtistCount) {
        return true;
      }
    })
  },
  ADD_EXTRACT: (state, selectedExtractName) => {
    if (!selectedExtractName) {
      state.selectedExtracts = []
      return
    }

    state.currentShow.extracts.find(extract => {
      if (extract.name === selectedExtractName) {
        state.selectedExtracts.push(extract);
        return true;
      }
    })
  },
  DELETE_EXTRACT: (state, deletedExtractName) => {
    state.selectedExtracts.find((extract, i) => {
      if (extract.name === deletedExtractName) {
        state.selectedExtracts.splice(i, 1);
        return true;
      }
    })
  }
}

const moduleStore = {
  state, getters, mutations
}

export default moduleStore
