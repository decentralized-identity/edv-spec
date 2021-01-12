import { CapabilityProof } from '../../types';

export interface RevocationBindingModel {
  '@context': string;
  id: string;
  invocationTarget: string; // HTTP Resource
  invoker: string; // DID URL
  allowedAction: string;
  parentCapability: string; // HTTP Resource
  proof: CapabilityProof;
}
