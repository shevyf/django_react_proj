import { MicroAgent } from '@newrelic/browser-agent/loaders/micro-agent'

const options_1 = {
  info: {beacon:"bam.eu01.nr-data.net",errorBeacon:"bam.eu01.nr-data.net",licenseKey:"NRJS-c144e1466ea45ab20e7",applicationID:"538562525",sa:1}, // configuration for application 1
  loader_config: {accountID:"3659611",trustKey:"3659611",agentID:"538562525",licenseKey:"NRJS-c144e1466ea45ab20e7",applicationID:"538562525"},
  init: {"loader":"spa","distributed_tracing":{"enabled":true},"privacy":{"cookies_enabled":true},"ajax":{"deny_list":["bam.eu01.nr-data.net"]},"pinned_version":null,"session_trace":{"enabled":false,"sampling_rate":0,"error_sampling_rate":0},"session_replay":{"enabled":false,"autoStart":true,"block_selector":"","mask_text_selector":"*","mask_all_inputs":true,"sampling_rate":0.0,"error_sampling_rate":0.0,"collect_fonts":true,"inline_images":false,"inline_stylesheet":true}}
}

const microAgent1 = new MicroAgent(options_1)
