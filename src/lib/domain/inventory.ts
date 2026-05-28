/**
 * Domain types for Customer Portal + WMS (not wired to UI yet).
 * Use when implementing API and database schema.
 */

export type TenantId = string;
export type ShipperId = string;
export type SkuId = string;
export type WarehouseId = string;
export type LocationId = string;

/** OEM or 3PL shipper under a tenant */
export type Shipper = {
  id: ShipperId;
  tenantId: TenantId;
  name: string;
  code: string;
};

/** Portal user scoped to tenant + optional shipper */
export type PortalUser = {
  id: string;
  tenantId: TenantId;
  shipperId: ShipperId | null;
  email: string;
  role: "viewer" | "admin";
};

/** Read model for customer portal dashboard */
export type InventoryBalance = {
  tenantId: TenantId;
  shipperId: ShipperId;
  skuId: SkuId;
  skuCode: string;
  description: string;
  warehouseId: WarehouseId;
  locationId: LocationId | null;
  quantityOnHand: number;
  quantityAvailable: number;
  quantityAllocated: number;
  unit: string;
  lotNumber?: string;
  updatedAt: string;
};

export type InventoryMovementType = "receipt" | "shipment" | "adjustment" | "transfer";

export type InventoryMovement = {
  id: string;
  tenantId: TenantId;
  shipperId: ShipperId;
  skuId: SkuId;
  type: InventoryMovementType;
  quantity: number;
  referenceNumber?: string;
  occurredAt: string;
};
