import URL from 'url'
import qs from 'qs'

export function getLink(link) {
    const url = URL.parse(link),
          query = qs.parse(url.query)

    return `${url.pathname}${Object.keys(query).length ? '?' : ''}${qs.stringify(query)}`   
}
