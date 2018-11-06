import service from '@/utils/service';
import http from '@/utils/http';

export default {
  getTaskCount: async (payload) => {
    let res = await hhtp({
      url: service.GET_TASK_COUNT,
      method: 'get',
      data: {
        token: payload.token
      }
    })
  }
}